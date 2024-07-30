// ? ugly number
// ? level easy

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 

// Constraints:

// -231 <= n <= 231 - 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 1) return true
    if (n <= 0) return false

    const factors = [2, 3, 5]

    for (let i = 0; i < factors.length; i++) {
        while (n % factors[i] === 0) {
            n /= factors[i]
        }
        
    }

    return n === 1
};

const input1 = 1
const input2 = 14
const input3 = 6

console.log(isUgly(input3))  // true
console.log(isUgly(input1))  // true
console.log(isUgly(input2))  // false