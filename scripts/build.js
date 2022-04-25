import esbuild from 'esbuild';
import { config } from './config.js';

esbuild.buildSync({
    ...config,
});