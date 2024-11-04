import Lotto from "../src/Lotto";
import LottoMachine from "../src/lottoMachine";
import { isInteger } from "../src/validator";
import ERROR_MESSAGE from "../src/constants/errorMessages";

describe('정수 예외 테스트', () => {
  test.each([
    ['문자', 'abc', ERROR_MESSAGE.INPUT_IS_NOT_NUMBER],
    ['공백', '   ', ERROR_MESSAGE.INPUT_IS_BLANK],
    ['소수', '0.1', ERROR_MESSAGE.INPUT_IS_DECIMAL]
  ])('%s', (_, input, errorMessage) => {
    expect(() => isInteger(input)).toThrow(errorMessage);
  });
});

describe('구입 금액 예외 테스트', () => {
  test.each([
    ['정수가 아니면 예외가 발생한다', 'abc', ERROR_MESSAGE.INPUT_IS_NOT_NUMBER],
    ['최소 구입 금액 미만을 입력하면 예외가 발생한다', '100', ERROR_MESSAGE.PAYMENT_IS_UNDER_PRICE],
    ['가격 단위로 입력하지 않으면 예외가 발생한다', '1234', ERROR_MESSAGE.PAYMENT_IS_NOT_PRICE_PER_UNIT],
  ])('%s', (_, input, errorMessage) => {
    expect(() => LottoMachine.isValidPayment(input)).toThrow(errorMessage);
  });
});

describe('보너스 번호 예외 테스트', () => {
  LottoMachine.winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
  test.each([
    ['당첨 번호에 입력한 숫자를 중복 입력하면 예외가 발생한다.', '3', ERROR_MESSAGE.NUMBERS_ARE_REPEATED],
    ['로또 번호 범위 외의 숫자를 입력하면 예외가 발생한다', '46', ERROR_MESSAGE.NUMBER_IS_NOT_IN_RANGE],
  ])('%s', (_, input, errorMessage) => {
    expect(() => LottoMachine.isValidBonusNumber(input)).toThrow(errorMessage);
  });
});
