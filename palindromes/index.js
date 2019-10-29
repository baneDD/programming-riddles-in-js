module.exports.isPalindrome = str => {
  // Empty string should return falsy result
  if (!str) return false;

  // If there is only one character it's a palindrome
  if (str.length === 1) return true;

  // We want the comparison to be case-insensitive and to only include alphanumeric characters
  str = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  const midpoint = Math.floor(str.length / 2);
  const secondHalf = str.substring(str.length % 2 === 0 ? midpoint : midpoint + 1);
  const flippedSecondHalf = secondHalf.split("").reduce((cur, acc) => acc + cur);
  return str.substring(0, midpoint) === flippedSecondHalf;
};
