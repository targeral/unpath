import path from 'path';
import { dirname } from './utils.js';

export const SOURCE_PATH = path.join(dirname(), '../src');


export const devEntryPoints = [
    'test.ts'
].map(file => path.join(SOURCE_PATH, file));

export const entryPoints = [
    'index.ts'
].map(file => path.join(SOURCE_PATH, file));