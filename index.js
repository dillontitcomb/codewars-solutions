// http://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

// ex: values = [1,2,5,4,7,3,2,1,6] n (number of beggars) = 3

function beggars(values, n) {
  let sumArray = [];
  for (let i = 0; i < n; i++) {
    let tempSum = 0;
    for (let j = i; j < values.length; j += n) {
      tempSum += values[j];
    }
    sumArray.push(tempSum);
  }
  return sumArray;
}

// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

// ex: arr = [1,4,3,2,2,5,7,8,5,5,5] return 5

function highestRank(arr) {
  let dict = {};
  arr.forEach(num => {
    if (!dict[num]) {
      dict[num] = 1;
    } else {
      dict[num] += 1;
    }
  });
  console.log(dict);
  let mostVal = 0;
  let mostKey;
  Object.keys(dict).forEach(key => {
    if (dict[key] > mostVal) {
      mostVal = dict[key];
      mostKey = parseInt(key);
    } else if (dict[key] === mostVal && key > mostKey) {
      mostVal = dict[key];
      mostKey = parseInt(key);
    }
  });
  return mostKey;
}

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// ex: "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"

function order(words) {
  const wordsArr = words.split(' ');
  let valuesArr = [];
  wordsArr.forEach(word => {
    let wordArr = word.split('');
    let num = wordArr.filter(letter => !isNaN(parseInt(letter)));
    valuesArr.push(num[0] - 1);
  });
  let output = [];
  for (let i = 0; i < wordsArr.length; i++) {
    output[valuesArr[i]] = wordsArr[i];
  }
  return output;
}

// https://www.codewars.com/kata/dubstep/train/javascript

// ex: "AWUBBWUBC" --> "A B C"

function songDecoder(song) {
  let songStr = song.replace(/WUB/g, ' ');
  const arr = songStr.split('');
  for (let i = 0; arr[i] == ' '; i++) {
    arr.shift(i);
    i--;
  }
  for (let i = arr.length - 1; arr[i] == ' '; i--) {
    arr.pop(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ' ' && arr[i + 1] == ' ') {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join('');
}

// https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript

// ex: 4.61 --> 4.5, 4.75 --> 5

function round(num) {
  let wholeNum = parseFloat(Math.round(num) - num);
  if (wholeNum > 0.25) {
    num = num - (0.5 - wholeNum);
  } else if (wholeNum > 0) {
    num = Math.round(num);
  } else if (wholeNum >= -0.25) {
    num = wholeNum + num;
  } else if (wholeNum >= -0.5) {
    num = num + 0.5 - Math.abs(wholeNum);
  }
  return num;
}

// http://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

// ex: 'foobar123' --> 'foobar124'

function incrementString(string) {
  const regEx = /\d+/;
  let numString;
  if (regEx.test(string) === true) {
    numString = regEx.exec(string)[0];
  } else {
    return string + 1;
  }
  const realNumArr = (parseInt(numString) + 1).toString().split('');
  const leadingZeroes = numString.length - realNumArr.length;
  for (let i = 0; i < leadingZeroes; i++) {
    realNumArr.unshift(0);
  }
  let output = string.replace(numString, realNumArr.join(''));
  return output;
}

// https://www.codewars.com/kata/56548dad6dae7b8756000037/train/javascript

// ex: 9:00 --> 3:00

function WhatIsTheTime(timeInMirror) {
  const clockHands = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let hours = timeInMirror.split(':')[0];
  let minutes = timeInMirror.split(':')[1];
  let timeIndex = clockHands.indexOf(parseInt(hours));
  let mirrorHours = clockHands[11 - timeIndex];
  let mirrorMinutes = minutes > 0 ? 60 - minutes : 0;
  if (mirrorMinutes === 0) mirrorHours += 1;
  let hourString;
  let minuteString;
  if (mirrorHours < 10) {
    hourString = '0' + mirrorHours;
  } else {
    hourString = mirrorHours.toString();
  }
  if (mirrorMinutes < 10) {
    minuteString = '0' + mirrorMinutes;
  } else {
    minuteString = mirrorMinutes.toString();
  }
  let output = `${hourString}:${minuteString}`;
  return output;
}

// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]

function listSquared(m, n) {
  let nums = [];
  let matches = [];
  let sums = [];
  while (m < n) {
    nums.push(m);
    let i = 0;
    let sum = 0;
    while (i <= m) {
      if (m % i === 0) {
        sum += i * i;
      }
      i++;
    }
    sums.push(sum);
    m++;
  }
  let k = 0;
  while (k < sums.length) {
    let temp = [];
    let sqrt = Math.round(Math.sqrt(sums[k]));
    if (sqrt * sqrt === sums[k]) {
      temp.push(nums[k]);
      temp.push(sums[k]);
      matches.push(temp);
    }
    k++;
  }
  return matches;
}

// https://www.codewars.com/kata/546a3fea8a3502302a000cd2/train/javascript

// ex: swaps = [[0,1], [1,2], [1, 0]] --> find_the_ball(0, swaps) == 2

find_the_ball = function(start, swaps) {
  let ball = start;
  swaps.forEach(move => {
    if (move[0] === ball) {
      ball = move[1];
    } else if (move[1] === ball) {
      ball = move[0];
    }
  });
  return ball;
};

// https://www.codewars.com/kata/street-fighter-2-character-selection/train/javascript

// ex: fighters = [["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"], ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]];
// moves = ['up', 'left', 'right', 'left', 'left'];
// initial position = [0,0];

function streetFighterSelection(fighters, position, moves) {
  let selections = [];
  moves.forEach(move => {
    console.log(move);
    switch (move) {
      case 'up':
        if (position[0] - 1 >= 0) position = [position[0] - 1, position[1]];
        break;
      case 'left':
        if (position[1] === 0) {
          position[1] = 5;
        } else if (fighters[position[0]][position[1] - 1])
          position = [position[0], position[1] - 1];
        break;
      case 'right':
        if (position[1] === 5) {
          position[1] = 0;
        } else if (fighters[position[0]][position[1] + 1])
          position = [position[0], position[1] + 1];
        break;
      case 'down':
        if (position[0] + 1 <= 1) position = [position[0] + 1, position[1]];
        break;
    }
    selections.push(fighters[position[0]][position[1]]);
  });
  return selections;
}

// https://www.codewars.com/kata/55f4e56315a375c1ed000159/train/javascript

// ex: powerSumDigTerm(2) --> 512 (5+1+2 = 8, 8^3 = 512)

// use Math.pow(number, 1/power) to find sqrts

function powerSumDigTerm(n) {
  let matches = [];
  let squares = getSquares(1000);
  squares.forEach(square => {
    if (sumDigits(square) === Math.sqrt(square)) {
      matches.push(square);
    }
  });
  return matches;
}

function sumDigits(num) {
  let sum = num
    .toString()
    .split('')
    .reduce((firstVal, nextVal) => {
      return parseInt(firstVal) + parseInt(nextVal);
    });
  return sum;
}

function getPowersUpToNum(num) {
  let powers = {};
  let multiple = 0;
  let index = 0;
  while (multiple < num) {
    for (let i = 2; i < 10; i++) {
      multiple = Math.pow(index, i);
      if (multiple > num) break;
      if (!powers[index]) powers[index] = multiple;
    }
    index++;
  }
  return powers;
}

function getSquares(num) {
  let squares = [];
  let multiple = 0;
  let index = 0;
  while (multiple < num) {
    multiple = index * index;
    squares.push(multiple);
    index++;
  }
  return squares;
}

// http://www.codewars.com/kata/58b38256e51f1c2af0000081/train/javascript

// find index of best match from Zamalek perspective (lowest goal differential if loss - if equal, most goals scored)
// both inputs are equal size arrays

function bestMatch(ALAHLYGoals, zamalekGoals) {
  let bestGameIndex = 0;
  let goalDifferential = ALAHLYGoals[0] - zamalekGoals[0];
  let goalsScored = zamalekGoals[0];
  for (let i = 1; i < ALAHLYGoals.length; i++) {
    let tempDifferential = ALAHLYGoals[i] - zamalekGoals[i];
    let tempGoalsScored = zamalekGoals[i];
    if (tempDifferential < goalDifferential) {
      goalDifferential = tempDifferential;
      goalsScored = tempGoalsScored;
      bestGameIndex = i;
    } else if (
      tempDifferential === goalDifferential &&
      tempGoalsScored > goalsScored
    ) {
      goalDifferential = tempDifferential;
      goalsScored = tempGoalsScored;
      bestGameIndex = i;
    }
  }
  return bestGameIndex;
}

// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

// Find perfect powers

var isPP = function(n) {
  for (let i = 0; i < n; i++) {
    if (i * i === n) {
      return [i, 2];
    }
  }
  return null;
};

// https://www.codewars.com/kata/mergesort-merge-function/train/javascript

// combine two sorted arrays

// e.g. [1,2,3,4,5], [6,7,8,9]

const waterDataArray = [
  3.00722e12,
  7374550,
  7374540,
  7374525,
  7374510,
  7374370,
  7374000,
  7295100,
  7294800,
  7290880,
  7289000,
  7265455,
  7032000,
  7024175,
  7022000,
  7020850,
  7020500,
  7010000,
  5587498,
  5587450,
  5501600,
  5474500,
  5420500,
  5420400,
  5416100,
  5411500,
  5389500,
  5386400,
  5378500,
  5378490,
  5355341,
  5355250,
  5355235,
  5344500,
  5331580,
  5331000,
  5288670,
  5288500,
  5283500,
  5270700,
  5267000,
  5261000,
  5242300,
  5227530,
  5227500,
  5211000,
  5210000,
  5207600,
  5200510
];

// http://www.codewars.com/kata/573992c724fc289553000e95/train/javascript
// Find smallest digit in a number, then place that digit elsewhere in the number
// to create a new number that is as small as possible
// TODO change output parameters to meet kata reqs

function smallest(n) {
  let digitArray = n.toString().split('');
  let tempSmallest = digitArray[1] || -1;
  let tempSmallestIndex = 1 || -1;
  for (let i = 0; i < digitArray.length; i++) {
    if (digitArray[i] < tempSmallest) {
      if (i == 0) {
        // do nothing (we don't want to move the smallest digit if it's in position 0)
      } else {
        tempSmallest = digitArray[i];
        tempSmallestIndex = i;
      }
    }
  }
  for (let i = 0; i < digitArray.length; i++) {
    if (tempSmallest < digitArray[i]) {
      digitArray.splice(tempSmallestIndex, 1);
      digitArray.splice(i, 0, tempSmallest);
      return [parseInt(digitArray.join('')), parseInt(tempSmallestIndex), i];
    }
  }
}

// console.log(smallest(209911312037));

// http://www.codewars.com/kata/5508249a98b3234f420000fb/train/javascript
// Variation on Caesar Cipher
// TODO group into 5 strings
const alphabet =
  'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

function movingShift(s, shift) {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i].toLowerCase();
    let letterPosition = alphabet.indexOf(letter);
    let capitalized = letter === arr[i] ? false : true;
    if (arr[i] == ' ' || arr[i] == '!') {
      //do nothing
    } else {
      arr[i] = alphabet[letterPosition + i + 1];
      if (capitalized) arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('');
}

function demovingShift(array, shift) {
  const arr = array.join('').split('');
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i].toLowerCase();
    let letterPosition = alphabet.lastIndexOf(letter);
    let capitalized = letter === arr[i] ? false : true;
    if (arr[i] == ' ' || arr[i] == '!') {
      //do nothing
    } else {
      arr[i] = alphabet[letterPosition - i - 1];
      if (capitalized) arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('');
}

var u = 'I should have known that you would have a perfect answer for me!!!';
var v = [
  'J vltasl rlhr ',
  'zdfog odxr ypw',
  ' atasl rlhr p ',
  'gwkzzyq zntyhv',
  ' lvz wp!!!'
];
// console.log(movingShift(u, 1));
// console.log(demovingShift(v, 1));

// http://www.codewars.com/kata/52ebe4608567ade7d700044a/train/javascript
// poker card encoder/decoder
// Number to str: get suit from num, subtract as needed, then lookup value in obj

const cards = {
  0: 'A',
  1: '2',
  2: '3',
  3: '4',
  4: '5',
  5: '6',
  6: '7',
  7: '8',
  8: '9',
  9: 'T',
  10: 'J',
  11: 'Q',
  12: 'K'
};

function cardsConverter(input) {
  if (input === undefined) return null;
  let type;
  isNaN(input[0]) ? (type = 'str') : (type = 'num');
  if (type == 'num')
    input = input.sort((a, b) => {
      return a - b;
    });
  function toStr(num) {
    let suit;
    if (num > 38) {
      suit = 's';
      num = cards[num - 39];
    } else if (num > 25) {
      suit = 'h';
      num = cards[num - 26];
    } else if (num > 12) {
      suit = 'd';
      num = cards[num - 13];
    } else {
      suit = 'c';
      num += 1;
    }
    return num + suit;
  }
  function toNum(str) {
    let num = parseInt(Object.keys(cards).find(key => cards[key] === str[0]));
    let suit = str[1];
    if (suit === 's') {
      return num + 39;
    } else if (suit === 'h') {
      return num + 26;
    } else if (suit === 'd') {
      return num + 13;
    } else {
      return num;
    }
  }
  let output;
  type === 'str'
    ? (output = input.map(x => toNum(x)).sort((a, b) => {
        return a - b;
      }))
    : (output = input.map(x => toStr(x)));
  return output;
}

// console.log(cardsConverter([]));
// console.log(cardsConverter([3, 6, 7, 13, 14]));
// console.log(cardsConverter(['7s', 'Ah', '5h', 'Qc', 'Qs']));
