import process from 'process';
import path from 'path';
import { readFileSync } from 'fs';
import compareFiles from './comparefiles.js';

const getFileType = (filepath) => path.extname(filepath).slice(1);
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');
const dataParse = (data) => JSON.parse(data);

const gendiff = (filePath1, filePath2) => {
  const path1 = getFilePath(filePath1);
  const path2 = getFilePath(filePath2);
  const data1 = readFile(path1);
  const data2 = readFile(path2);
  const parseData1 = dataParse(data1);
  const parseData2 = dataParse(data2);
  return compareFiles(parseData1, parseData2);
};

export default gendiff;
