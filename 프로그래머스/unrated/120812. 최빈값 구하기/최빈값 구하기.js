function solution(array) {
  let obj = {};
  for (let num of array) {
    if (obj[num]) {
       
      obj[num]++;
    } else {
      obj[num] = 1;
    }
 }

  let result = -1;
  let maxResult = 0;

  for (let key in obj) {
    if (obj[key] > maxResult) {
      result = key;
      maxResult = obj[key];
    } else if (obj[key] === maxResult) {
      result = -1;
    }
  }

  return parseInt(result);
}