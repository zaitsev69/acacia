// C:\Users\natha\code\acacia\pages\backoffice.js
import { useState, useEffect } from 'react';
import BackOffice from '../components/backoffice';
import Info from '../components/info';

export default function BackofficePage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles'));
    if (storedFiles) {
      setUploadedFiles(storedFiles);
    }
  }, []);

  return (
    <div>
      <BackOffice setUploadedFiles={setUploadedFiles} />
      {uploadedFiles.length === 2 && (
        <Info file1={uploadedFiles[0]} file2={uploadedFiles[1]} />
      )}
    </div>
  );
}
