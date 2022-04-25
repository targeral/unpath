import esbuild from 'esbuild';
import { execaNode } from 'execa';
import { config } from './config.js';
import { devEntryPoints } from './constants.js';
import { createPackageJsonFileForDist } from './createPkgJson.js';

const argvs = process.argv.slice(2);
const runPath = process.cwd();

esbuild.build({
    ...config,
    entryPoints: devEntryPoints,
    watch: {
        onRebuild() {
            execaNode(argvs[0], {cwd: runPath, stdio: 'inherit'});
        }
    },
}).then(async () => {
    console.info('create package.json for dist');
    createPackageJsonFileForDist();
    console.info('watching');
    execaNode(argvs[0], {cwd: runPath, stdio: 'inherit'});
});