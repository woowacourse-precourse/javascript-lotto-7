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

function purchaseAmountunit(number) {
  if (number % LOTTO.PRICE !== 0) {
    throw new Error();
  }
}

function minPurchase(number) {
  if (number < LOTTO.PRICE) {
    throw new Error();
  }
}

describe("구입 금액 유효성 검사 테스트", () => {
  test(`${LOTTO.PRICE}으로 나누어 떨어지지 않는 경우`, () => {
    const NUMBERS = [1200, 500, "hello"];

    NUMBERS.forEach((numbers) => {
      expect(() => purchaseAmountunit(numbers)).toThrow(Error);
    });
  });

  test(`${LOTTO.PRICE} 미만인 경우`, () => {
    const NUMBERS = [0, -1000];

    NUMBERS.forEach((numbers) => {
      expect(() => minPurchase(numbers)).toThrow(Error);
    });
  });
});
