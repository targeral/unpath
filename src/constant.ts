import unpath from './unpath';

export const unpathPrefixREG = /^un.*/;
export type TUnPath = keyof typeof unpath;
export const isUnPathProp = (prop: TUnPath | string): prop is TUnPath => {
    return prop in unpath;
}