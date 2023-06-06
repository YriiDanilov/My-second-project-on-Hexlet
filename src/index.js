import { readFileSync } from 'fs';

export default (filepath1, filepath2) => {
    const readFile1 = readFileSync(filepath1, 'utf-8');
    const parse1 = JSON.parse(readFile1);
    console.log(parse1);
    const readFile2 = readFileSync(filepath2, 'utf-8');
    const parse2 = JSON.parse(readFile2);
    console.log(parse2);
};
