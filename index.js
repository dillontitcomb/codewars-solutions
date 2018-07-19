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
