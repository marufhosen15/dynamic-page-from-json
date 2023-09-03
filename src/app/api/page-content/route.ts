import { NextResponse } from "next/server";
import * as fs from "fs";

const folderPath = "fakejson";
export async function GET(request: Request) {
  try {
    // Parse query parameters from the URL
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    // Get a specific query parameter named 'paramName'
    const paramNameValue = queryParams.get("path")?.split("/").join("");

    // get the contents file / folder of the folder
    const items = fs.readdirSync(folderPath);
    let content = "";
    items.forEach((item) => {
      if (item.split(".")[0] === paramNameValue) {
        const itemPath = `${folderPath}/${item}`;
        const itemStats = fs.statSync(itemPath);
        if (itemStats.isFile()) {
          content = fs.readFileSync(itemPath, "utf8");
        }
      }
    });

    return NextResponse.json({ data: JSON.parse(content) }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
