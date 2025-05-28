import * as fs from "node:fs/promises";

const fileName = './src/info.txt';
const content = 'Node.js is awesome!';



fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing file:', err.message);
    } else {
        console.log('File successfully written.');

        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err.message);
            } else {
                console.log('File content:');
                console.log(data);
            }
        });
    }
});