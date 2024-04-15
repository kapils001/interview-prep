function secondMax(arr) {
  arr.sort((a, b) => a - b); // Ologn so not a good solution
  return arr[arr.length - 2];
}

// console.log(secondMax([1,3,5,77,45,22]))

function optimisedSecondmax(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log("largest, secondlargest", largest, secondLargest);
}

// optimisedSecondmax([1, 2, 33, 44, 5, 12, 2, 89]);

//  rotate an array by K-steps

function rotateArrJS(num, k) {
  let size = num.length;

  if (size > k) {
    k = k % size; // calc absolute rotation
  }
  const rotated = num.splice(size - k, size); // 8-3  o(N)
  num.unshift(...rotated);
}

function rotateArray(arr, k) {
  let updatedArr = [];
  let length = arr.length;

  for (let i = length - k; i < arr.length; i++) {
    updatedArr.push(arr[i]);
  }
  for (let i = 0; i < length - k; i++) {
    updatedArr.push(arr[i]);
  }
  console.log(updatedArr);
}

// rotateArray([-1, -100, 3, 99], 2);

// Remove dublicates

function removeDuplicatesJs(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
    }
  }
}

function removeDuplicatesjS(arr) {
  return Array.from(new Set(arr));
}

function removeDuplicates(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = arr[i];
    }
  }
  return Object.keys(obj);
}

// count number of unique elements of duplicate arr
function removeDuplicatesTwoPointer(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
// console.log(removeDuplicatesTwoPointer([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function twosum(arr, n) {
  let first = 0;
  let second = arr.length - 1;

  if (arr[first] + arr[second] === n) return `${arr[first]} ${arr[second]}`;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return `${i} ${j}`;
      }
    }
  }
  return "not found";
}

function optimisedtwoSum(arr, n) {
  let first = 0;
  let last = arr.length - 1;

  while (last > first) {
    if (arr[first] + arr[last] > n) {
      last--;
    } else if (arr[first] + arr[last] < n) {
      first++;
    } else if (arr[first] + arr[last] === n) return `${first} , ${last}`;
  }
  return "not found";
}

// console.log(optimisedtwoSum([5, 6, 7, 8,], 11));
// target = 9
// arr = [2,7,9,11] // 0,1
// target = 10
// arr = [1,2,5,5] // 3,4
// target = 9
// arr = [2,3,3,3,3,3,3,3,3] // -1,-1

function largestSumOfConsecutiveDigits(arr, n) {
  let maxsum = 0;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (j = 0; j<n; j++) {
      sum = sum + arr[j + i];
    }
    if (sum > maxsum) {
      maxsum = sum;
    }
  }
}
largestSumOfConsecutiveDigits([1, 2, 3, 4, 5, 6, 7], 4);
