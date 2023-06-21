import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

const getExtension = (filepath) => path.extname(filepath);
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');
const dataParse = (data) => JSON.parse(data);

export { readFile, dataParse };
