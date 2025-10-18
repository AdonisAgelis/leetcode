// Given an integer x, return true if x is a palindrome, and false otherwise.
function palindromeNumber(x) {
  const number = String(x);

  let left = 0;
  let right = number.length - 1;

  for (let i = left; i < right; i++) {
    if (number[i] !== number[right - i]) return false;
  }

  return true;
}

// Example usage:
console.log(palindromeNumber(751232157));

// Time complexity: O(n)
// Space complexity: O(n)
