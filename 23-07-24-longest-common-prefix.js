// ? 23 july 2024 - longest common prefix
// ? level : easy

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */

const case1 = ["flower", "flow", "flight"];
const case2 = ["dog", "racecar", "car"];
const case3 = ["dimas", "dia", "dina"];
const case4 = ["dimas", "dimsum", "dimana"];

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(case1));
console.log(longestCommonPrefix(case2));
console.log(longestCommonPrefix(case3));
console.log(longestCommonPrefix(case4));
