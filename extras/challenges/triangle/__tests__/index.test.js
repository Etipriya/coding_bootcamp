const { expect } = require("@jest/globals");
const { isEquilateral, isIsosceles, isTriangle, triangle } = require("..");
describe("isEquilateral", () => {
  it("should return true when all 3 sides are equal", () => {
    const expected = true;
    const actual = isEquilateral(3, 3, 3);

    expect(actual).toEqual(expected);
  });

  it("should return false when all 3 sides are not equal", () => {
    const expected = false;
    const actual = isEquilateral(3, 3, 4);

    expect(actual).toEqual(expected);
  });
});

describe("isIsosceles", () => {
  it("should return true when a and b are equal", () => {
    const expected = true;
    const actual = isIsosceles(3, 3, 4);

    expect(actual).toEqual(expected);
  });

  it("should return true when a and c are equal", () => {
    const expected = true;
    const actual = isIsosceles(3, 4, 3);

    expect(actual).toEqual(expected);
  });

  it("should return true when b and c are equal", () => {
    const expected = true;
    const actual = isIsosceles(4, 3, 3);

    expect(actual).toEqual(expected);
  });

  it("should return false when all sides are not equal", () => {
    const expected = false;
    const actual = isIsosceles(3, 4, 5);

    expect(actual).toEqual(expected);
  });
});

describe("isTriangle", () => {
  it("should return true when it is a triangle", () => {
    const expected = true;
    const actual = isTriangle(3, 4, 5);

    expect(actual).toEqual(expected);
  });

  it("should return false when any side is 0", () => {
    const expected = false;
    const actual = isTriangle(3, 0, 0);

    expect(actual).toEqual(expected);
  });

  it("should return false when it is not a triangle", () => {
    const expected = false;
    const actual = isTriangle(3, 30, 4);

    expect(actual).toEqual(expected);
  });
});

describe("triangle", () => {
  it("should return EQ for equilateral triangle", () => {
    const expected = "EQ";
    const actual = triangle(3, 3, 3);

    expect(actual).toEqual(expected);
  });

  it("should return ISO for isosceles triangle", () => {
    const expected = "ISO";
    const actual = triangle(3, 3, 2);

    expect(actual).toEqual(expected);
  });

  it("should return SCA for scalene triangle", () => {
    const expected = "SCA";
    const actual = triangle(3, 4, 5);

    expect(actual).toEqual(expected);
  });

  it("should return INVALID for equilateral triangle", () => {
    const expected = "INVALID";
    const actual = triangle(3, 0, 3);

    expect(actual).toEqual(expected);
  });
});
