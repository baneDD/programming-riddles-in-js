const { toPostfix } = require("./index.js");

describe("Postfix Notation Function", () => {
  test("It should return '275*'+ for '2+7*5'", () => {
    expect(toPostfix("2+7*5")).toBe("275*+");
  });
  test("It should return '33*71+/' for '3*3/(7+1)'", () => {
    expect(toPostfix("3*3/(7+1)")).toBe("33*71+/");
  });
  test("It should return '562-9*+371-^+' for '562-9*+371-^+'", () => {
    expect(toPostfix("5+(6-2)*9+3^(7-1)")).toBe("562-9*+371-^+");
  });
  test("It should return '54-1-95/2/+71/7/-' for '(5-4-1)+9/5/2-7/1/7'", () => {
    expect(toPostfix("(5-4-1)+9/5/2-7/1/7")).toBe("54-1-95/2/+71/7/-");
  });
});
