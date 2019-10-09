module.exports = function multiply(first, second) {

  first = first.split('').map(digit => parseInt(digit, 10));
  second = second.split('').map(digit => parseInt(digit, 10));

  let firstNum = first.length;
  let secondNum = second.length;
  
  let result = new Array((firstNum + secondNum));

  result.fill(0);
  
  for (let j = secondNum - 1; j >= 0; j--) {
  
      for (let i = firstNum - 1; i >= 0; i--) {
          let c = second[j] * first[i];
          let temp = result[i + j + 1];
  
          result[i + j + 1] = (temp + c) % 10;
          result [i + j] = result[i + j] + ((temp + c) - result[i + j + 1]) / 10;
      }
  
  }
  
  while (result[0] === 0) {
    result.shift();
  }

  return result.join('');

}
