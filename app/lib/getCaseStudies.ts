
import fs from 'fs/promises';
import path from 'path';


export async function getCaseStudies() {
  const filePath = path.join(process.cwd(), 'app/api/case-studies.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}