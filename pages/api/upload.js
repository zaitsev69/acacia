// C:\Users\natha\code\acacia\pages\api\upload.js
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const handler = async (req, res) => {
  console.log('Request method:', req.method);
  
  if (req.method === 'POST') {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 50 * 1024 * 1024, // Augmenter la limite de taille du fichier à 50 Mo
    });

    console.log('Form created, starting to parse the request');

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing files:', err);
        res.status(500).json({ message: 'Error parsing files', error: err.message });
        return;
      }

      try {
        console.log('Files parsed successfully:', files);
        const uploadedFiles = [];

        Object.keys(files).forEach((key) => {
          const fileArray = files[key]; // Récupère le tableau de fichiers pour chaque champ

          fileArray.forEach(file => {
            const filePath = path.join(uploadDir, file.originalFilename);
            console.log('Saving file:', filePath);
            fs.renameSync(file.filepath, filePath);
            uploadedFiles.push(file.originalFilename);
          });
        });

        res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
      } catch (error) {
        console.error('Error saving files:', error);
        res.status(500).json({ message: 'Error saving files', error: error.message });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;