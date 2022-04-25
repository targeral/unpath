import assert from 'assert';
import * as path from 'path';

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

export const basename = new Proxy(path.basename, {
    apply(_, __, argsList: [string, string | undefined]) {
        const p = argsList[0];
        const platformPath = getWin32OrPosixAPIByPath(p);
        return platformPath.basename(...argsList);
    }
});