console.log("Begin File Input");

const fs = require('fs');
const filename = 'input.txt';

const input = fs.readFileSync(filename, 'utf-8');

const round = input.split('\n');

const theirChoice = {
    ROCK: "A",
    PAPER: "B",
    SCISSORS: "C"
}

const myChoice = {
    ROCK: "X",
    PAPER: "Y",
    SCISSORS: "Z"
}

var score  = 0

function win(theirs, mine) {
    if (theirs == theirChoice.ROCK) {
        switch (mine) {
            case "X":
                return "draw";
            case "Y":
                return "win";
            case "Z":
                return "loss";
            default:
                console.log("error");
        }
    } else if (theirs == theirChoice.PAPER) {
        switch (mine) {
            case "X":
                return "loss";
            case "Y":
                return "draw";
            case "Z":
                return "win";
            default:
                console.log("error");
        }
    } else if (theirs == theirChoice.SCISSORS) {
        switch (mine) {
            case "X":
                return "win";
            case "Y":
                return "loss";
            case "Z":
                return "draw";
            default:
                console.log("error");
        }
    }
}

for (var i = 0; i < round.length; ++i) {
    switch (win(round[i].at(0), round[i].at(2))) {
        case "win":
            score += 6;
            break;
        case "draw": 
            score += 3;
            break;
        case "loss":
            score += 0;
            break;
    }
    switch (round[i].at(2)) {
        case "X":
            score += 1;
            break;
        case "Y":
            score += 2;
            break;
        case "Z":
            score += 3;
            break;
        default:
            console.log("error");
    }
}

console.log(score)