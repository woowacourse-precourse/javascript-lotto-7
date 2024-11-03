import {
  validateMoney,
  validateWinningNumber,
  validateBonusNumber,
} from '../src/utils/validation';
import { ERROR_MESSAGES } from '../src/constant/constants';

describe('로또 구입금액 입력 예외 테스트', () => {
  test('로또 구입금액이 빈값일 예외가 발생한다.', () => {
    const money = '';

    expect(() => validateMoney(money)).toThrow(ERROR_MESSAGES.EMPTY_INPUT);
  });

  test('로또 구입금액이 숫자가 아닌경우 예외가 발생한다.', () => {
    const money = '*';

    expect(() => validateMoney(money)).toThrow(
      ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER,
    );
  });

  test('로또 구입금액의 단위가 1000원이 아닌 경우 예외가 발생한다.', () => {
    const money = 20;

    expect(() => validateMoney(money)).toThrow(
      ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT,
    );
  });
});

describe('당첨 번호 입력 예외 테스트', () => {
  test('당첨 번호가 빈값일 예외가 발생한다.', () => {
    const numbers = '';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.EMPTY_INPUT,
    );
  });

  test('입력된 당첨 번호에 쉼표가 없으면 예외가 발생한다.', () => {
    const numbers = '123';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.INVALID_COMMA,
    );
  });

  test('당첨 번호가 6개가 아니라면 예외가 발생한다.', () => {
    const numbers = '1,2,3,4,5,6,7,8';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.INVALID_COUNT,
    );
  });

  test('당첨 번호중 중복된 번호가 있다면 예외가 발생한다.', () => {
    const numbers = '1,1,3,4,5,6';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.DUPLICATION_NUMBER,
    );
  });

  test('입력된 당첨 번호에 ,를 제외한 특수기호가 있다면 예외가 발생한다.', () => {
    const numbers = '1,2,3.4';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.SPECIAL_SYMBOL,
    );
  });

  test('당첨 번호가 1부터 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
    const numbers = '1,2,3,4,5,80';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.OUT_OF_RANGE,
    );
  });

  test('당첨 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    const numbers = 'a,s,d,f,f';

    expect(() => validateWinningNumber(numbers)).toThrow(
      ERROR_MESSAGES.WINNING_NUMBER.NOT_A_NUMBER,
    );
  });
});

describe('보너스 번호 입력 예외 테스트', () => {
  test('보너스 번호가 빈값일 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '';

    expect(() => validateBonusNumber(bonusNumber, winningNumbers)).toThrow(
      ERROR_MESSAGES.EMPTY_INPUT,
    );
  });

  test('보너스 번호가 당첨 번호중 하나와 같다면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '6';

    expect(() => validateBonusNumber(bonusNumber, winningNumbers)).toThrow(
      ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER,
    );
  });

  test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '-';

    expect(() => validateBonusNumber(bonusNumber, winningNumbers)).toThrow(
      ERROR_MESSAGES.BONUS_NUMBER.NOT_A_NUMBER,
    );
  });

  test('보너스 번호가 1부터 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '100';

    expect(() => validateBonusNumber(bonusNumber, winningNumbers)).toThrow(
      ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE,
    );
  });
});
