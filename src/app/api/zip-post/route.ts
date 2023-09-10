import fs from "fs";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log(data);
  return NextResponse.json({ hello: "hello" });
}
