import { path, unpath } from './index';

const filePath = 'C:\\temp\\myfile.html';

const basename = path.basename(filePath);
const b2 = unpath.basename(filePath);
const b3 = (path as any).unbasename(filePath);
console.info('path.basename', basename);
console.info('unpath.basename', b2);
console.info('path.unbasename', b3);

