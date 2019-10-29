module.exports.isPalindrome = str => {
  // Empty string should return falsy result
  if (!str) return false;

  // If there is only one character it's a palindrome
  if (str.length === 1) return true;

  // We want the comparison to be case-insensitive and to only include alphanumeric characters
  str = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  // NOTE: We could reverse the string in multiple ways, including using Array.reverse and various loops
  return str.split("").reduce((acc, cur) => cur + acc) === str;
};
