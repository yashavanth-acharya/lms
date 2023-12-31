import fs from 'fs';
import { btoa } from 'buffer';

export default async function handler(file:any) {

  const fileContents = fs.readFileSync(file.path);
  const buffer = Buffer.from(fileContents);
  const base64String = btoa(buffer);

  return base64String;
}