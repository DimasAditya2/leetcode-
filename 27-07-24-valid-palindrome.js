// ? valid palindrom
// ? level easy

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwis

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters. 

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Hapus karakter non-alphanumeric
    const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
};

const s1 = "A man, a plan, a canal: Panama";
const s2 = "race a car";
const s3 = " ";
console.log(isPalindrome(s1)); // Output: true
console.log(isPalindrome(s2)); // Output: false
console.log(isPalindrome(s3)); // Output: true
