import assert from 'assert';
import * as path from 'path';

export type Argu<F extends (input: any) => any> = F extends (
    input: infer A,
  ) => any
    ? A
    : never;
  

/**
 * 
 * @param pathString file path or dir path
 */
export const getWin32OrPosixAPIByPath = (pathString: string) => {
    const win32Sep = path.win32.sep;
    const posixSep = path.posix.sep;
    const haveWin32Sep = pathString.includes(win32Sep);
    const havePosixSep = pathString.includes(posixSep);
    assert.ok(!(haveWin32Sep && havePosixSep), `both win32 sep and posix sep exist`);

    if (haveWin32Sep) {
        return path.win32;
    }

    return path.posix;
};

/***
 * # Explain
 * 
 * On windows systems, the correct results are returned for both windows paths and posix paths; 
 * however, on posix systems, incorrect results are returned for windows paths.
 **/
type BaseNameT = typeof path.basename;
export const basename: BaseNameT = (p, ext) => {
    const platformPath = getWin32OrPosixAPIByPath(p);
    return platformPath.basename(p, ext);
};

export const unpath =  {
    basename,
};

export type unPathT = typeof unpath;
export type UnPathProps = keyof unPathT;
export type AddPrefixForProp<O, Prefix> = {
    [Property in keyof O as `${string & Prefix}${string & Property}`]: O[Property]
};
export type PathExtentProps = AddPrefixForProp<unPathT, 'un'>;