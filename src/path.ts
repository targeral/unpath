import * as _path from 'path';
import unpath from './unpath';
import { unpathPrefixREG, isUnPathProp } from './constant';

export const path  = new Proxy(_path, {
    // apply(_, __, argsList: [string, string | undefined]) {
    //     const p = argsList[0];
    //     const platformPath = getWin32OrPosixAPIByPath(p);
    //     return platformPath.basename(...argsList);
    // }
    get(target, prop, rec) {
        if (prop in target) {
            return Reflect.get(target, prop, rec);
        }
        
        if (typeof prop === 'symbol') {
            return Reflect.get(target, prop, rec);
        }

        if (unpathPrefixREG.test(prop)) {
            const propWithoutUN = prop.slice(2);
            if (isUnPathProp(propWithoutUN)) {
                return unpath[propWithoutUN];
            }
        }

        return Reflect.get(target, prop, rec);
    }
});