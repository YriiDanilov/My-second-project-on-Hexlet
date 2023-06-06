#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';
const program = new Command();

program
  .name('gendiff')
  .description('CLI to some JavaScript string utilities')
  .option('-v, --version')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });
program.parse();