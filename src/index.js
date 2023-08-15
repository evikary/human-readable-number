 function toReadable (number) {
  const strNum = String(number)
  let num = '';

  const simpleNum = (n) => {
    let num = '';

   if (n >= 0 && n <= 9) {
    switch(n) {
      case 0:
        return num = 'zero';
      case 1:
        return num = 'one';
      case 2:
        return num = 'two';
      case 3:
        return num = "three";
      case 4:
        return num = "four";
       case 5:
        return num = "five";
       case 6:
        return num = "six";
       case 7:
        return num = "seven";
       case 8:
        return num = "eight";
       case 9:
        return num = "nine";
    }
   }

   if (n >= 10 && n <= 19) {
    switch(n) {
      case 10:
        return num = "ten";
      case 11:
        return num = "eleven";
      case 12:
        return num = "twelve";
      case 13:
        return num = "thirteen";
       case 14:
        return num = "fourteen";
       case 15:
        return num = "fifteen";
       case 16:
        return num = "sixteen";
      case 17:
        return num = "seventeen";
       case 18:
        return num = "eighteen";
       case 19:
        return num = "nineteen";
    }
   }
  }

  const roundNum = (n) => {
    let num = '';

    switch(n) {
      case 20:
        return num = 'twenty';
      case 30:
        return num = 'thirty';
      case 40:
        return num = 'forty';
      case 50:
        return num = "fifty";
      case 60:
        return num = "sixty";
       case 70:
        return num = "seventy";
       case 80:
        return num = "eighty";
       case 90:
        return num = "ninety";
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
    } else if (strNum[1] !== '0' && strNum[1] === '1') {
      num = `${simpleNum(+strNum[0])} hundred ${simpleNum(+`${strNum[1]}${strNum[2]}`)}`;
    } else {
      num = `${simpleNum(+strNum[0])} hundred ${roundNum(+strNum[1] * 10)} ${simpleNum(+strNum[2])}`;
    }
  } 

  return num;
}

module.exports = toReadable;
