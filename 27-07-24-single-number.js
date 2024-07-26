// ? Single Number
// ? level easy

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let l = nums.length;
  let i, j;
  let unique = [];
  for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] === nums[j]) {
        break;
      }
    }
    if (j === l) {
      unique = nums[i];
    }
  }

  return unique;
};

const num1 = [2, 2, 1];
const num2 = [4, 1, 2, 1, 2];
const num3 = [1];

console.log(singleNumber(num1)); // Output: 1
console.log(singleNumber(num2)); // Output: 4
console.log(singleNumber(num3)); // Output: 1
