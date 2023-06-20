import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

export default (filePath) => {
  //Óonst extension = path.extname(filePath);
  //const basename = path.basename(filePath);
  const absolutePath = path.resolve(process.cwd(), filePath);
  const readJson = readFileSync(absolutePath, 'utf-8');
  const result = JSON.parse(readJson);
  return result;
};
