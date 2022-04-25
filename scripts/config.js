import { entryPoints } from './constants.js';

export const config = {
    entryPoints: entryPoints,
    bundle: true,
    platform: 'node',
    target: ['node14'],
    format: 'cjs',
    outdir: 'dist',
}