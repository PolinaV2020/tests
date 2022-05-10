const validateValue = require("./validateValue");

describe("Value validation", () => {
  test("Basic case", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Less then correct value", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("Greater then correct value", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Bottom limit value", () => {
    expect(validateValue(0)).toBe(false);
  });

  test("Limit value from above", () => {
    expect(validateValue(100)).toBe(true);
  });
});
