import compareFiles from './comparefiles.js';
import { readFile, dataParse } from './readfile.js';

const gendiff = (filePath1, filePath2) => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);
  const parseData1 = dataParse(data1);
  const parseData2 = dataParse(data2);
  return compareFiles(parseData1, parseData2);
};

export default gendiff;
