import { LOTTO } from "../src/constants/Constants";

describe("당첨 번호 입력 유효성 검사 테스트", () => {
  function totalNumber(numbers) {
    if (numbers.length !== LOTTO.TOTAL_NUMBERS) {
      throw new error();
    }
  }

  function numberArrange(numbers) {
    numbers.forEach((number) => {
      if (!number <= LOTTO.ARRANGE_END || !number >= LOTTO.ARRANGE_START) {
        throw new error();
      }
    });
  }

  function isInteger(numbers) {
    numbers.forEach((number) => {
      if (typeof number !== "number" || Math.floor(number) !== number) {
        throw new error();
      }
    });
  }

  function sameNumber(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new error();
    }
  }

  test(`총 ${LOTTO.TOTAL_NUMBERS}개가 아닌 경우`, () => {
    const NUMBERS = [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1], []];

    NUMBERS.forEach((numbers) => {
      expect(() => totalNumber(numbers)).toThrow(Error);
    });
  });

  test(`${LOTTO.ARRANGE_START}~${LOTTO.ARRANGE_END}가 아닌 경우`, () => {
    const NUMBERS = [
      [1, 1, 1, 1, 1, 46],
      [1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 100],
      [1, 1, 1, 1, 1, "ㄱ"],
    ];

    NUMBERS.forEach((numbers) => {
      expect(() => numberArrange(numbers)).toThrow(Error);
    });
  });

  test("정수가 아닌 경우", () => {
    const NUMBERS = [
      [1, 1, 1, 1, 1, 1.5],
      [1, 1, 1, 1, 1, "ㄱ"],
    ];

    NUMBERS.forEach((numbers) => {
      expect(() => isInteger(numbers)).toThrow(Error);
    });
  });

  test("숫자가 중복된 경우", () => {
    const NUMBERS = [
      [1, 1, 2, 3, 4, 5],
      [1, 1, 1, 1, 1, 1],
    ];

    NUMBERS.forEach((numbers) => {
      expect(() => sameNumber(numbers)).toThrow(Error);
    });
  });
});
