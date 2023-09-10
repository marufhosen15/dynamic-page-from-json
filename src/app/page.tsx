"use client";

import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/register-plugin");
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  const uploadFile = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file); // Replace 'file' with your file input reference

      const response = await axios.post("/api/zip-post", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <input
            type="file"
            // accept=".zip"
            onChange={(e) => uploadFile(e.target.files[0])}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
