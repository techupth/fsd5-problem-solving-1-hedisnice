//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let validChars = "";
  for (const char of s) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      validChars += char;
    }
  }
  const lowercaseString = validChars.toLowerCase();
  const reversedString = lowercaseString.split("").reverse().join("");
  return lowercaseString === reversedString;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
