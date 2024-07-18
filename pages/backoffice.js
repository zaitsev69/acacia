// pages/backoffice.js
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BackOffice from "../components/backoffice";

export default function BackofficePage({ session }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("uploadedFiles")) {
      const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
      if (storedFiles) {
        setUploadedFiles(storedFiles);
      }
    }
  }, []);

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <BackOffice setUploadedFiles={setUploadedFiles} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session)
  if (!session) {

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
  
}
