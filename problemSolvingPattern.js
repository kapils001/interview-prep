// 1.  Freequency counter pattern - comparing values
//  This pattern uses the objects or sets to collect values/freequencies of values
// this can often avoid the need for nested loops or O(N^2) operations with arrays/strings

// Problem => write a fn Same that accepts two arrays  , return true if every value in arr1 has squared value in arr2

// sol-1 -> unoptimised => O(N^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2[i].indexOf(arr1[i] * arr1[i]);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Sol-2 =>  O (N) 3(N)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freequencyCounter1 = {};
  let freequencyCounter2 = {};

  for (let val of arr1) {
    freequencyCounter1[val] = (freequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr1) {
    freequencyCounter2[val] = (freequencyCounter2[val] || 0) + 1;
  }
  for (let key in freequencyCounter1) {
    if (!(key ** 2 in freequencyCounter2)) {
      return false;
    }
    if (freequencyCounter2[key ** 2] !== freequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Question - 2
function isValidAnagrams(string1, string2) {
  if (string1.length !== string2.length) return false;

  const lookup = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}

// console.log(isValidAnagrams("anagram", "nagaram"))

// 2. Multiple Pointers - creating pointers or values that corresponds to an index or position and move towards the beginning, end or middle based on certain conditions.
// very efficient - min space complexity

// Q) sumZero fn that accepts sorted arr of numbers, return first pair where sum is zero
// ineff solutions
const sumZero = function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};

// optimised solution
function sumZeroOptimised(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZeroOptimised([-4, -3, -2, -1, 0, 5, 10]));

// Q)  count Unique numbers => accepts sorted array, returns no. of unique value, here we keeping two pinters and moving both fromstart then when we find j !==i then we increment i and set the value of j into arr[i] index, so in end we find the unique value in start of array

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// 3. SLIDING WINDOW PATTERN => this pattern involves a window which can either be an array or number from one position to another depending on certain condition, the window either increases or closes (and a new window is created).
//  very useful for keeping track of a subset of data in an array/string etc.

// Q) maxSubarrSum , it accepts arr of integrer, and number n. cal max sum of n consecutive elements in the array

const maxSubarrSum = function maxSubarrSum(arr, num) {
  if (arr.length < num) return undefined;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

// -9 4 9 6 -1 -4 1 3 -6


// console.log(maxSubarrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// 4. Divide and Conquer - this pattern involves dividing data set into smaller chunks and then repeating a process with a subset of data.
//  this pattern can tremendously decrease time-complexity

function binarySearch(arr, val) {
  if (arr.length === 0) return undefined;
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === 1) {
    return mid;
  } else if (arr[mid] > 1) {
    return search(arr.slice(0, mid)) || search(arr.slice(mid + 1));
  } else {
    return undefined;
  }
}
