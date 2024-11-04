import App from "../src/Jest.js";

describe("Split,Set Test", () => {
  test("check split", () => {
    expect(new App().testSplit("1,2")).toStrictEqual(["1", "2"]);
  });

  test("set size", () => {
    expect(new App().createSet()).toStrictEqual(5);
  });
  ("");

  test.each(["1,2,3", "11,7,0", "7,5,-2", "(0,2,3)", "(11,7,0)", "(11,7,-2)"])(
    "containSet(%s) returns %s",
    (str) => {
      expect(new App().containSet(str)).toBe(false);
    }
  );

  test.each(["7,2,10,5", "4", "(10)", "(7,2)", "(10,7,4,2)"])(
    "containSet(%s) returns %s",
    (str) => {
      expect(new App().containSet(str)).toBe(true);
    }
  );

  test.each([
    ["HELLO", 2, "L"],
    ["hello", 0, "h"],
  ])("getChar(%s, %s) returns %s", (first, second, expected) => {
    expect(new App().getChar(first, second)).toBe(expected);
  });

  test.each([
    ["Hi", 2],
    ["Hi", -1],
  ])("containSet(%s, %d) returns %s", (str, num) => {
    expect(() => {
      new App().getChar(str, num);
    }).toThrow("[ERROR]");
  });
});
