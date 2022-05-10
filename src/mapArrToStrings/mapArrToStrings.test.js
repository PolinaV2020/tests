const mapArrToStrings = require("./mapArrToStrings");

describe("Array of numbers transformation into array of strings", () => {
  test("Array of numbers", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Elements of different types", () => {
    expect(
      mapArrToStrings([1, 2, null, undefined, "number", false, 9])
    ).toEqual(["1", "2", "9"]);
  });

  test("An empty array", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("Negation", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
