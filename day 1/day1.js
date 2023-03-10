console.log("Begin File Input");

const fs = require('fs');
const filename = 'input.txt';

const input = fs.readFileSync(filename, 'utf-8');

const integers = input.split('\n').map(Number);

var list = []
var temp = 0;

console.log("Begin Computation")
for (var i = 0; i < integers.length; ++i) {
    if (integers[i] === 0) {
        list.push(temp);
        temp = 0;
    } else {
        temp = temp + integers[i];
    }
}

var max = 0;
for (var i = 0; i < list.length; ++i) {
    if (list[i] > max) {
        max = list[i];
    }
}

console.log(max);

list[list.indexOf(max)] = 0;

max = 0;
for (var i = 0; i < list.length; ++i) {
    if (list[i] > max) {
        max = list[i];
    }
}

console.log(max);

list[list.indexOf(max)] = 0;

max = 0;
for (var i = 0; i < list.length; ++i) {
    if (list[i] > max) {
        max = list[i];
    }
}

console.log(max);

list[list.indexOf(max)] = 0;

max = 0;
for (var i = 0; i < list.length; ++i) {
    if (list[i] > max) {
        max = list[i];
    }
}

console.log(max);

64929+64690+64078