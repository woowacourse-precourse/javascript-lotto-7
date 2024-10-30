import { LOTTO } from "../src/constants/Constants.js";
import { Validator } from "../src/utils/Validator.js";

describe("당첨 번호 입력 유효성 검사 테스트", () => {
  test(`총 ${LOTTO.TOTAL_NUMBERS}개가 아닌 경우`, () => {
    const NUMBERS = [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1], []];

    NUMBERS.forEach((numbers) => {
      expect(() => Validator.totalNumber(numbers)).toThrow(Error);
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
      expect(() => Validator.numberArrange(numbers)).toThrow(Error);
    });
  });

  test("정수가 아닌 경우", () => {
    const NUMBERS = [
      [1, 1, 1, 1, 1, 1.5],
      [1, 1, 1, 1, 1, "ㄱ"],
    ];

    NUMBERS.forEach((numbers) => {
      expect(() => Validator.isInteger(numbers)).toThrow(Error);
    });
  });

  test("숫자가 중복된 경우", () => {
    const NUMBERS = [
      [1, 1, 2, 3, 4, 5],
      [1, 1, 1, 1, 1, 1],
    ];

    NUMBERS.forEach((numbers) => {
      expect(() => Validator.sameNumber(numbers)).toThrow(Error);
    });
  });
});
