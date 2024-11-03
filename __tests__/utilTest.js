import {
  getRate,
  isNotANumber,
  isNotInteger,
  isOutOfRange,
} from "../src/util/util.js";

describe("유틸 함수 테스트", () => {
  test.each([
    { input: "10", response: false },
    { input: "0", response: true },
    { input: "55", response: true },
  ])("isOutOfRange 테스트 %o", ({ input, response }) => {
    expect(isOutOfRange(input)).toBe(response);
  });

  test.each([
    { input: "10", response: false },
    { input: "a", response: true },
  ])("isNotANumber 테스트 %o", ({ input, response }) => {
    expect(isNotANumber(input)).toBe(response);
  });

  test.each([
    { input: "10", response: false },
    { input: "10.1", response: true },
  ])("isNotInteger 테스트 %o", ({ input, response }) => {
    expect(isNotInteger(input)).toBe(response);
  });

  test.each([
    { prizePrice: 0, purchasePrice: 0, response: 0 },
    { prizePrice: 0, purchasePrice: 1000, response: 0 },
    { prizePrice: 1000, purchasePrice: 0, response: 0 },
    { prizePrice: 1000, purchasePrice: 1000, response: 100 },
  ])("getRate 테스트 %o", ({ prizePrice, purchasePrice, response }) => {
    expect(getRate(prizePrice, purchasePrice)).toBe(response);
  });
});
