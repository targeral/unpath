import { path } from "./path"

export const isSupportUnixPath = () => {
    return path.join('/a/b', 'c') === '/a/b/c';
};

export const isSupportWin32Path = () => {
    return !isSupportUnixPath();
}