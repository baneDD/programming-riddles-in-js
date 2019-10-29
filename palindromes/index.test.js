const { isPalindrome } = require("./index.js");

describe("Palindrome Tester Function", () => {
  test("It should return false for empty string", () => {
    expect(isPalindrome("")).toBeFalsy();
  });

  test("It should return false for undefined", () => {
    expect(isPalindrome(undefined)).toBeFalsy();
  });

  test("It should return false for 'Toronto'", () => {
    expect(isPalindrome("Toronto")).toBeFalsy();
  });

  test("It should return false for 'Toronto'", () => {
    expect(isPalindrome("Toronto")).toBeFalsy();
  });

  test("It should return false for '1233344'", () => {
    expect(isPalindrome("1233344")).toBeFalsy();
  });

  test("It should return true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBeTruthy();
  });

  test("It should return true for '1234321'", () => {
    expect(isPalindrome("1234321")).toBeTruthy();
  });

  test("It should return true for 'mellem", () => {
    expect(isPalindrome("mellem")).toBeTruthy();
  });

  test("It should return true for 'a'", () => {
    expect(isPalindrome("a")).toBeTruthy();
  });

  test("It should return true for 'Sonos'", () => {
    expect(isPalindrome("Sonos")).toBeTruthy();
  });
});
