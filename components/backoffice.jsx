'use client';

import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  
  return (
    <>
      <h1>Upload le PDF </h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/menu/upload?filename=${file.name}`,
            {
              method: 'POST',
              body: file,
            },
          );

          const newBlob = (await response.json());

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>

        <button onClick={async () => {
         const response = await fetch('/api/menu/upload', 
         {
          method: 'GET',
         },
        )
        const responseBody = await response.json()

        console.log(responseBody)
        }}>TEST</button>


      
      {blob && (
        <div>
          Menu bien importé
        </div>
      )}
    </>
  );
}