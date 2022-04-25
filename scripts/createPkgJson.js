import fs from 'fs';
import path from 'path';
import { dirname } from './utils.js';

export const createPackageJsonFileForDist = () => {
    const filePath = path.join(dirname(), './package.json.temp');
    const targetPath = path.join(dirname(), '../dist/package.json');
    fs.copyFileSync(filePath, targetPath);
}