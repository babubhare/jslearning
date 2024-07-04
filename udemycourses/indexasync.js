import * as fsp from 'node:fs/promises';
import * as fs from 'node:fs/promises';

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

console.log(text);

//reads the files from the given directory
await fs.readdir('./udemycourses', { withFileTypes: false })
    .then((files) => {
        files.forEach(file => {
            console.log(`name is ${file}`);
        })
    })
    .catch((err) => {
        console.log('Error!' + err);
    });

var name = 'First Pass';
console.log(`testing ${name}`);

async function syncall() {
    //reads the files from the given directory
    var files = await fs.readdir('./udemycourses', { withFileTypes: false });
    files.forEach(file => {
        console.log(`name is ${file}`);
    })
}

syncall();

var name = 'Second Pass';
console.log(`testing ${name}`);
