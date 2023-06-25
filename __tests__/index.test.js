import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url); //fileURLToPath корректная расшифровка символов пути; import.meta.url получение доступа к мета-информации об этом модуле н-р "file:///home/user/my-module.js";
const __dirname = dirname(__filename); // имя каталога текущего модуля .То же самое что path.dirname для __filename н-р : /Users/mjr

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const filePath1 = getFixturePath('filepath1.json');
const filepath2 = getFixturePath('filepath2.json');
const expected = readFile('expect.txt');

test('gendiff test', () => {
  expect(gendiff(filePath1, filepath2)).toEqual(expected);
});
