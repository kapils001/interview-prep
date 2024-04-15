//  2 types => linear && Binary
//  linear is simple includesor find

// binary search -- input arr should be sorted output Olog(n)
function binarySearch(arr, target) {
  let start = arr[0];
  let end = arr[arr.length - 1];

  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return middle;
    else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

// console.log("seearch", binarySearch([-1,2,3,6,99], 3))

// count Kth missing integer from sorted array

function findKthPositive(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return count + k;
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));

// lenear search
function maximumCount() {
  let nums = [-2, -1, -1, 1, 2, 3, 5];
  let positive = 0;
  let negative = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    Math.sign(nums[i]) === 1 ? (positive += 1) : (negative += 1);
  }

  return Math.max(positive, negative);
}

// console.log(maximumCount());

// binary search

function maxCount(nums = [-2, -1, -1, 1, 2, 3, 5]) {
  function upperBound(nums) {
    let low = 0; //REFLECT right most negative number
    high = nums.length - 1;
    while (low < high) {
      let mid = Math.ceil((low + high) / 2); // 3.5 = 3
      if (nums[mid] < 0) low = mid;
      else high = mid - 1;
    }
    return nums[0] >= 0 ? 0 : low + 1;
  }

  function lowerBound(nums) {
    let low = 0; //REFLECT right most negative number
    high = nums.length - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2); // 3.5 = 3
      if (nums[mid] > 0) high = mid;
      else low = mid + 1;
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
  }
  return Math.max(upperBound(nums), lowerBound(nums));
}

console.log(maxCount());