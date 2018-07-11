// http://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

//ex: values = [1,2,5,4,7,3,2,1,6] n (number of beggars) = 3
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

//ex: arr = [1,4,3,2,2,5,7,8,5,5,5] return 5

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
