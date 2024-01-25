const FS_Proxy = require("./FS_Proxy");
const fs = new FS_Proxy(require('fs'));
const path = require('path');


const txtFile = path.join(__dirname, "README.txt");
const mdFile = path.join(__dirname, "README.md");

const result =(error, contents) => {
    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

fs.readFile(txtFile, 'UTF-8', result); // try commenting this line to see the proxy allow only .md files
fs.readFile(mdFile, 'UTF-8', result);