const square = require("./square");

describe("Square function", () => {
  test("Correct value", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
});
