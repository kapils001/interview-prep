// validanagra,

function validAnagram(first, second) {
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    // O(n)
    lookup[first[i]]
      ? (lookup[first[i]] = lookup[first[i]] + 1)
      : (lookup[first[i]] = 1);
  }
  console.log("lookup", lookup);
  for (let i = 0; i < second.length; i++) {
    //O(n)
    if (!lookup[second[i]]) return false;
    lookup[second[i]] = lookup[second[i]] - 1;
  }
  return true;
}
// console.log(validAnagram("anagram", "nagaram"));

// Js-inbuild
function validanagramJS(first, second) {
  return first.split("").sort().join(",") == first.split("").sort().join(",");
}
// console.log(validanagramJS("anagram", "nagaram"));

function longestCommonPrefix(arr) {
  let lookup = {};
  const temp = arr.join("").split("");
  for (let i = 0; i < temp.length; i++) {
    lookup[temp[i]] = lookup[temp[i]] ? lookup[temp[i]] + 2 : 1;
  }

  let output = "";
  for (key in lookup) {
    if (lookup[key] === arr.length + 2) output += key;
  }
}
// longestCommonPrefix(["flight", "flower", "flight"]);

function longestCommonPrefixOptimised(a) {
  let size = a.length;

  /* if size is 0, return empty string */
  if (size == 0) return "";

  if (size == 1) return a[0];

  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      if (a[0][i] != a[j][i]) return a[0].slice(0, i);
    }
  }
}

// console.log(
//   longestCommonPrefixOptimised(["geeksforgeeks", "geeks", "geek", "geezer"])
// );

// Merge Altrenate char of words
const mergeAlternate = (w1, w2) => {
  //   if (w1.length !== w2.length) return "null";
  //   var total = w1.length + w2.length;
  let output = "";
  for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
    // console.log("w2", w2[w2.length-1])
    if (i < w1.length) {
      output += w1[i];
    }
    if (i < w2.length) {
      output += w2[i];
    }
  }
  console.log("output", output);
};

// mergeAlternate("abc", "pq");

//  length of last word

function lengthOfLastWord(inputString) {
  const temp = inputString.trim().split(" ");
  console.log(temp[temp.length - 1].length);
}

// lengthOfLastWord("luffy is still joyboy")
