/*
26 values from 0.0 to 1.0 0.5 being usual reaching 0.0 or 1.0 === death
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z so to start
let health = {
    'A': 0.5,
    'B': 0.5,
    'C': 0.5,
    'D': 0.5,
    'E': 0.5,
    'F': 0.5,
    'G': 0.5,
    'H': 0.5,
    'I': 0.5,
    'J': 0.5,
    'K': 0.5,
    'L': 0.5,
    'M': 0.5,
    'N': 0.5,
    'O': 0.5,
    'P': 0.5,
    'Q': 0.5,
    'R': 0.5,
    'S': 0.5,
    'T': 0.5,
    'U': 0.5,
    'V': 0.5,
    'W': 0.5,
    'X': 0.5,
    'Y': 0.5,
    'Z': 0.5
};

These can be grouped into five senses E.G. {LGBTQ can be one sense, PRIDE can be a different sense} later that change the input and one extra value 
The first iteration each group will not have repeating values 
E.G. {
    "senses":["KDHLO","WCBRV","NZQXG","EFSIY","JPTUA"],
    "remainder":"M"
}

new strings of six characters in chat become modifier functions that are different from previous modifiers randomly changing six values ++ or --
Store in a hasmap 

when chat comes in apply the modifiers that match each chunk of the text to the values

E.G "The qu","ick br","own fo","x jump","s over"," the l","azy do","g"
"The qu" becomes a modifier function A++ G-- M++ Q-- R-- Z--
"ick br" becomes a modifier function F-- N-- R++ U-- H++ O-- 
"own fo" becomes a modifier function J++ X++ U++ H++ O++ Z++ 
"x jump" becomes a modifier function N-- D++ Z-- K++ W++ X--
"s over" becomes a modifier function T++ C-- R++ B-- A++ M--
" the l" becomes a modifier function I-- E-- M++ F-- G++ N++
"azy do" becomes a modifier function P++ Q-- S-- V++ L-- T--
"g" becomes a modifier function A-- G-- M++ Q-- R-- Z--

*/
export function makeSenses() {
    let alphaList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphaCopy = alphaList.split('');
    let shuffledCopy = alphaCopy.sort(function () {
        return Math.random() - 0.5;
    });

    const senses = [];
    senses.push(shuffledCopy[0] + shuffledCopy[1] + shuffledCopy[2] + shuffledCopy[3] + shuffledCopy[4] );
    senses.push(shuffledCopy[5] + shuffledCopy[6] + shuffledCopy[7] + shuffledCopy[8] + shuffledCopy[9]);
    senses.push(shuffledCopy[10] + shuffledCopy[11] + shuffledCopy[12] + shuffledCopy[13] + shuffledCopy[14]);
    senses.push(shuffledCopy[15] + shuffledCopy[16] + shuffledCopy[17] + shuffledCopy[18] + shuffledCopy[19]);
    senses.push(shuffledCopy[20] + shuffledCopy[21] + shuffledCopy[22] + shuffledCopy[23] + shuffledCopy[24]);
    return {
        senses: senses,
        remainder: shuffledCopy[25]
    };
}

export function makeModifier(currentHealth, changes) {
    const DELTA = 0.1;
    const PRECISION = 2;
    let health = currentHealth;
    let diff = changes.split('');
    diff.map(item => { 
        item === item.toUpperCase() ? health[item] += DELTA : health[item.toUpperCase()] -= DELTA;
    });
    diff.map(item => {
        item = Math.floor(item, PRECISION);
    })
    return health; 
}

export function checkDead(currentHealth) {
    return Object.values(currentHealth).includes(1.0) || Object.values(currentHealth).includes(0.0)
}