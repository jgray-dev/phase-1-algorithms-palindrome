function isPalindrome(word) {
  const split = word.split("");
  let rev = [];
  for (let i = 0; i < split.length; i++) {
    rev[split.length - i - 1] = split[i];
  }

  const reveresed = rev.join("");
  const original = split.join("");
  if (reveresed === original) {
    return true;
  } else {
    return false;
  }
}

//Write a function isPalindrome that will receive one argument, a string. Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
