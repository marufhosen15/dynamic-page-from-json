import React from "react";

const App = () => {
  // const uploadFile = async (file: any) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file); // Replace 'file' with your file input reference

  //     const response = await axios.post("/api/zip-post", formData, {
  //       headers: {
  //         "Content-Type": `multipart/form-data; boundary=${formData}`,
  //       },
  //     });

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
