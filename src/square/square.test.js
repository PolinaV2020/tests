const square = require("./square");

describe("Square function", () => {
  test("Pow method is called once", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("Pow method isn't called", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach( () => {
    jest.clearAllMocks();
  })
});
