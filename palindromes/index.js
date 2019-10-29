module.exports.isPalindrome = str => {
  if (!str) return false; // Empty string should return falsy result
  if (str.length === 1) return true; // If there is only one character it's a palindrome
  str = str.toLowerCase(); // We want the comparison to be case-insensitive

  const midpoint = Math.floor(str.length / 2);
  const secondHalf = str.substring(str.length % 2 === 0 ? midpoint : midpoint + 1);
  const flippedSecondHalf = secondHalf.split("").reduce((cur, acc) => acc + cur);
  return str.substring(0, midpoint) === flippedSecondHalf;
};
