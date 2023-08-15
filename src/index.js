 function toReadable (number) {
  const strNum = String(number)
  let num = '';

  const simpleNum = (n) => {

   if (n >= 0 && n <= 9) {
    switch(n) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return "three";
      case 4: return "four";
      case 5: return "five";
      case 6: return "six";
      case 7: return "seven";
      case 8: return "eight";
      case 9: return "nine";
    }
   }

   if (n >= 10 && n <= 19) {
    switch(n) {
      case 10: return "ten";
      case 11: return "eleven";
      case 12: return "twelve";
      case 13: return "thirteen";
      case 14: return "fourteen";
      case 15: return "fifteen";
      case 16: return "sixteen";
      case 17: return "seventeen";
      case 18: return "eighteen";
      case 19: return "nineteen";
    }
   }
  }

  const roundNum = (n) => {
    switch(n) {
      case 20: return 'twenty';
      case 30: return 'thirty';
      case 40: return 'forty';
      case 50: return "fifty";
      case 60: return "sixty";
      case 70: return "seventy";
      case 80: return "eighty";
      case 90: return "ninety";
    }
  }

  if (strNum.length === 1 || number <= 19) {
    num = simpleNum(number);
  } else if (strNum.length === 2 && number >= 20) {
    if (strNum[1] !== '0') {
      num = `${roundNum(+strNum[0] * 10)} ${simpleNum(+strNum[1])}`;
    } else {
      num = roundNum(+strNum);
    }
  } else if (strNum.length === 3) {
    if (strNum[1] === '0' && strNum[2] === '0') {
      num = `${simpleNum(+strNum[0])} hundred`;
    } else if (strNum[1] !== '0' && strNum[1] !== '1' && strNum[2] === '0') {
      num = `${simpleNum(+strNum[0])} hundred ${roundNum(+(`${strNum[1]}${strNum[2]}`))}`
    } else if (strNum[1] === '0' && strNum[2] !== '0') {
      num = `${simpleNum(+strNum[0])} hundred ${simpleNum(+strNum[2])}`
    } else if (strNum[1] === '1') {
      num = `${simpleNum(+strNum[0])} hundred ${simpleNum(+`${strNum[1]}${strNum[2]}`)}`;
    } else {
      num = `${simpleNum(+strNum[0])} hundred ${roundNum(+strNum[1] * 10)} ${simpleNum(+strNum[2])}`;
    }
  } 

  return num;
}

module.exports = toReadable;
