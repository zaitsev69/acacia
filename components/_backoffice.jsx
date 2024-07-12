// C:\Users\natha\code\acacia\components\backoffice.jsx
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const BackOffice = ({ setUploadedFiles }) => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setFile2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file1 || !file2) {
      alert('Please select both files to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Files uploaded successfully');
        setUploadedFiles(result.files);
        localStorage.setItem('uploadedFiles', JSON.stringify(result.files)); // Stocker les fichiers dans le localStorage
      } else {
        alert(`Failed to upload files: ${result.message}`);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('An error occurred while uploading the files.');
    }
  };

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user.role !== 'admin') {
      router.push('/login');
    }
  }, [session, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return null;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload PDF 1:</label>
        <input type="file" onChange={handleFile1Change} accept="application/pdf" />
      </div>
      <div>
        <label>Upload PDF 2:</label>
        <input type="file" onChange={handleFile2Change} accept="application/pdf" />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default BackOffice;
