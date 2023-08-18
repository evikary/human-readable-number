function toReadable(number) {
    const strNum = String(number);
    let num = "";

    const simpleNumber = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const roundNumber = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (strNum.length === 1 || number <= 19) {
        num = simpleNumber[number];
    } else if (strNum.length === 2 && number >= 20) {
        if (strNum[1] !== "0") {
            num = `${roundNumber[+strNum[0] * 10]} ${simpleNumber[+strNum[1]]}`;
        } else {
            num = roundNumber[+strNum];
        }
    } else if (strNum.length === 3) {
        if (+strNum % 100 === 0) {
            num = `${simpleNumber[+strNum[0]]} hundred`;
        } else if (strNum[1] >= 2 && strNum[2] === "0") {
            num = `${simpleNumber[+strNum[0]]} hundred ${
                roundNumber[+`${strNum[1]}${strNum[2]}`]
            }`;
        } else if (strNum[1] === "0" && strNum[2] !== "0") {
            num = `${simpleNumber[+strNum[0]]} hundred ${
                simpleNumber[+strNum[2]]
            }`;
        } else if (strNum[1] === "1") {
            `${strNum[1]}${strNum[2]}`;
            num = `${simpleNumber[+strNum[0]]} hundred ${
                simpleNumber[+`${strNum[1]}${strNum[2]}`]
            }`;
        } else {
            num = `${simpleNumber[+strNum[0]]} hundred ${
                roundNumber[+strNum[1] * 10]
            } ${simpleNumber[+strNum[2]]}`;
        }
    }

    return num;
}

module.exports = toReadable;
