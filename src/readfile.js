import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

export default (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const readJson = readFileSync(absolutePath, 'utf-8');
  const result = JSON.parse(readJson);
  return result;
};
