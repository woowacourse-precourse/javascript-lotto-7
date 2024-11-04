import { checkLottoPurchasePrice, checkLottoBonusNumber } from '../../src/input/validatorInput.js';
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
      checkLottoPurchasePrice(input);
    }).toThrow(expectedError);
  });

  test.each(VALID_CASES)("로또 구입 금액이 유효한 경우 (%s)", (_, input) => {
    expect(() => {
      checkLottoPurchasePrice(input);
    }).not.toThrow();
  });
});




const INVALID_BONUS_CASES = [
  ["로또 번호와 중복된 경우", [[[1, 2, 15, 4, 13, 6], [10, 20, 30, 4, 5, 6]], 6], ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_DUPLICATE],
  ["숫자가 아닌 경우", [[], 'abc'], ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE],
  ["정수가 아닌 경우", [[], 7.5], ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE],
  ["최소 범위 미만의 숫자인 경우", [[], -1], ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE],
  ["최대 범위를 초과한 숫자인 경우", [[], 100], ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE],
];

const VALID_BONUS_CASES = [
  ["로또 번호와 중복되지 않은 보너스 번호", [[[1, 2, 3, 4, 5, 6], [10, 20, 30, 40, 41, 42]], 7]],
  ["허용 범위 내의 보너스 번호", [[[10, 20, 30, 40, 41, 42], [1, 2, 3, 4, 5, 6]], 11]],
];

describe("로또 보너스 번호 유효성 테스트", () => {
  test.each(INVALID_BONUS_CASES)("보너스 번호가 %s", (_, [lottoList, bonusNumber], expectedError) => {
    expect(() => {
      checkLottoBonusNumber(lottoList, bonusNumber);
    }).toThrow(expectedError);
  });

  test.each(VALID_BONUS_CASES)("보너스 번호가 유효한 경우 (%s)", (_, [lottoList, bonusNumber]) => {
    expect(() => {
      checkLottoBonusNumber(lottoList, bonusNumber);
    }).not.toThrow();
  });
});
