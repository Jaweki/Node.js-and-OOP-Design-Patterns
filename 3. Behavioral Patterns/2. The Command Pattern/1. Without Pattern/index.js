const { createInterface } = require('readline');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('create <filename> <text> | exit');
rl.prompt();

rl.on('line', input => {
    
    const [commandText, ...remaining] = input.split(' ')
    const [fileName, ...fileText] = remaining
    const text = fileText.join(' ')

    switch(commandText) {
        case "exit": 
            console.log('ToDo: Exit');
            break;

        case "create": 
            console.log(`ToDo: Create file ${fileName}`);
            console.log('file contents: ', text);
            break;

        default:
            console.log(`${commandText} command not found!`);
    }

    rl.prompt();
});