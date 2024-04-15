// Bubble Sort
// in first iteration it put biggest element in end and then we runn loop for length -1 -n times
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
};

// O(n^2), space O(1)

// bubbleSort([2, 4, 1, 3, 7, 5]);

// SelectionSort  = finds least element and put in first

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        minIndex = j;
        // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  console.log(arr);
};

// SelectionSort([29, 10, 14, 37, 14]);  //O(n^2) , Space O(1)

//  Insersion Sort ---
// steps =>
// 1.consider second element = arr[1] = start from here.
// 2. arr[j] > current =>  swap
// [8,2,4,1,3]
const insertionSort = (arr) => {
  let temp = [];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    const j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
};

// Insersion sort => time - best case o(n) , worst O(n^2)

const mergeSort = (arr) => {
  //O(n-log-n) -time, O(n) - space 
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log("left,right,parent", left, right)

  return merge(left, right);
};

function merge(left, right) {
  let sortedArr = [];
  console.log("left, right", left, right);
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  console.log('sortedArr', sortedArr)
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
