import { NextResponse } from "next/server";
import * as fs from "fs";

const folderPath = "src/components/";
export async function GET(request: Request) {
  // const content = `
  //   "use client";
  //   import React, { useEffect } from "react";

  //   const App = () => {
  //       return (
  //       <div>
  //           <h1>Home Page</h1>
  //       </div>
  //       );
  //   };
  //   export default App;

  //   `;

  // fs.writeFile(`${folderPath}Test.tsx`, content, function (err) {
  //   if (err) {
  //     return NextResponse.json({ message: err }, { status: 500 });
  //   }
  // });
  return NextResponse.json({ message: "Successfully append" }, { status: 200 });
}
// import { NextResponse } from "next/server";
// import * as fs from "fs";

// const folderPath = "src/components/";
// export async function GET(request: Request) {
//   const content = `
//     "use client";
//     import React, { useEffect } from "react";

//     const App = () => {
//         return (
//         <div>
//             <h1>Home Page</h1>
//         </div>
//         );
//     };
//     export default App;

//     `;

//   fs.writeFile(`${folderPath}Test.tsx`, content, function (err) {
//     if (err) {
//       return NextResponse.json({ message: err }, { status: 500 });
//     }
//     return NextResponse.json(
//       { message: "Successfully append" },
//       { status: 200 }
//     );
//   });
// }
