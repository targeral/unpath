import * as unpath from './path';

const filePath = 'C:\\temp\\myfile.html';

const basename = unpath.basename(filePath);
console.info('basename', basename);

