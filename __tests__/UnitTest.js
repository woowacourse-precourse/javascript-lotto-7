import { hasDuplicate, isNotPositiveInteger, isInRange } from "../src/utils/validation.js";
import { LOTTO_RULES } from "../src/constants/index.js";

describe("배열의 중복을 체크한다.", () => {
  test.each([
    { array: ["a", "b", "a"], expected: true, description: "중복 O" },
    { array: ["a", "b"], expected: false, description: "중복 X" },
  ])("hasDuplicate(array)를 실행하면 expected한 결과가 나온다.", ({ array, expected }) => {
    expect(hasDuplicate(array)).toBe(expected);
  });
});

describe("양의 정수를 체크한다.", () => {
  test.each([
    { number: 0, expected: true, description: "양수 X" },
    { number: 1.1, expected: true, description: "정수 X" },
    { number: 1, expected: false, description: "양의 정수 O" },
  ])("isNotPositiveInteger(number)를 실행하면 expected한 결과가 나온다.", ({ number, expected }) => {
    expect(isNotPositiveInteger(number)).toBe(expected);
  });
});

describe("타겟 숫자가 범위에 포함되는지 체크한다.", () => {
  const { MIN_RANGE, MAX_RANGE } = LOTTO_RULES; // 1 ~ 45
  test.each([
    { target: 40, expected: true, description: "범위에 포함" },
    { target: 46, expected: false, description: "범위에 포함되지 않음" },
  ])("isNotPositiveInteger(number)를 실행하면 expected한 결과가 나온다.", ({ target, expected }) => {
    expect(isInRange(MIN_RANGE, MAX_RANGE, target)).toBe(expected);
  });
});
