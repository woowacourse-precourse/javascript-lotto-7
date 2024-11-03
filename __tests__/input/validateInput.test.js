import { checkLottoPurchaseAmount } from '../../src/input/validatorInput.js';
import ERROR_MESSAGE from '../../src/constants/errorMessage.js';

const INVALID_CASES = [
  ["숫자가 아닌 경우", '13*$', ERROR_MESSAGE.PURCHASE_AMOUNT_NAN],
  ["0인 경우", 0, ERROR_MESSAGE.PURCHASE_AMOUNT_EMPTY],
  ["빈 문자열인 경우", "", ERROR_MESSAGE.PURCHASE_AMOUNT_EMPTY],
  ["공백만 있는 문자열인 경우", "  ", ERROR_MESSAGE.PURCHASE_AMOUNT_EMPTY],
  ["음수인 경우", -5000, ERROR_MESSAGE.PURCHASE_AMOUNT_NEGATIVE],
  ["1000원 단위로 나누어지지 않는 경우", 1500, ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVIDE_1000],
  ["정수가 아닌 경우", 1000.5, ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_INTEGER],
  ["너무 큰 경우", 100000000000000000, ERROR_MESSAGE.PURCHASE_AMOUNT_TOO_LARGE],
  ["최소 금액 미만인 경우", 500, ERROR_MESSAGE.PURCHASE_AMOUNT_TOO_SMALL],
];

const VALID_CASES = [
  ["1000원 단위의 정상 입력", 3000],
  ["허용 범위 내의 큰 금액", 1560000]
];

describe("로또 구입 금액 유효성 테스트", () => {
  test.each(INVALID_CASES)("로또 구입 금액이 %s", (_, input, expectedError) => {
    expect(() => {
      checkLottoPurchaseAmount(input);
    }).toThrow(expectedError);
  });

  test.each(VALID_CASES)("로또 구입 금액이 유효한 경우 (%s)", (_, input) => {
    expect(() => {
      checkLottoPurchaseAmount(input);
    }).not.toThrow();
  });
});
