import { unpath } from './unpath';
import type { UnPathProps } from './unpath';

export const unpathPrefixREG = /^un.*/;
export const isUnPathProp = (prop: UnPathProps | string): prop is UnPathProps => {
    return prop in unpath;
}