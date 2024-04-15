// Sum of natural numbers
function sumNaturalNumber(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumNaturalNumber(10));

// sum of digits
function sumOfDigitis() {
  let num = arguments[0];
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigitis(78438));

// ----------------------------------------------
// count no. of digits of number
function countDigits(num) {
  if (!Number.isInteger(num)) return undefined;
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(countDigits(123456789));
// console.log(countDigits(-1));

// ---------------------------------------------
// Palindrome number
//  first find remainder by % => multiply reverse with 10 and add rem
// then reduce the num by dividing
function isPalindromeNumber(num) {
  let num1 = num;
  let reverse = 0;

  while (num1 > 0) {
    const remainder = num1 % 10;
    reverse = reverse * 10 + remainder;
    num1 = Math.floor(num1 / 10);
  }
  return num === reverse;
}

// console.log(isPalindromeNumber(16461));

// ---------------------------------------------------------
// Fabbonaci series -

// 1) using loop
function fabbonaci(n) {
  if (n < 2) return 1;
  let prev = 0;
  let curr = 1;
  let next;
  for (let i = 2; i < n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}
// console.log(fabbonaci(8))

// using recursion
function fabbonaci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fabbonaci(n - 1) + fabbonaci(n - 2);
}
// console.log(fabbonaci(8))

// missing Numbers ex input =[3,0,1] output = 2

function missingNumber(arr) {
  let arrSum = sumNaturalNumber(arr.length);
  let newSum = 0;

  //   for (i = 0; i < arr.length; i++) {
  //     newSum = newSum + arr[i];
  //   }

  return arrSum - arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(missingNumber([2, 0, 1, 4]));
