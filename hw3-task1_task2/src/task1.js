import * as fs from "node:fs/promises";

const folderName = './src/myFolder';

// create:
try {
    await fs.mkdir(folderName);
    console.log('Folder created.');
} catch (err) {
    console.log('Folder already exists!')
}

// delete:
/* try {
    await fs.rmdir(folderName);
    console.log('Folder deleted.');
} catch (err) {
    console.error('Error deleting folder:', err.message);
}
 */