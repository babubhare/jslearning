// script.js
//import data from "./1.json" with  {type: 'json'} ;

import * as fs from "node:fs";
import * as path from "node:path";

const jsonsInDir = fs.readdirSync('./udemycourses/coursesjson').filter(file => path.extname(file) === '.json');

jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('./udemycourses/coursesjson', file));
    const jsonData = JSON.parse(fileData.toString());

    jsonData.results.forEach((item) => {
        console.log(item.title + ';' + 'https://www.udemy.com' + item.url + ';' + item.id + ';' + file);
    });

});



