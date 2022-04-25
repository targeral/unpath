import path from 'path';
import fs from 'fs';
import esbuild from 'esbuild';
import { config } from './config.js';
import { dirname } from './utils.js';

fs.rmSync(path.join(dirname(), '../dist'), {recursive: true, force: true});

esbuild.buildSync({
    ...config,
});