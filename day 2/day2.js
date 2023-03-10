console.log("Begin File Input");

const fs = require('fs');
const filename = 'input.txt';

const input = fs.readFileSync(filename, 'utf-8');

const integers = input.split('\n').map(Number);