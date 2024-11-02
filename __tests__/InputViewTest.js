import { MissionUtils } from '@woowacourse/mission-utils';

import { getUserMoney, getWinningNumbers, getBonusNumber } from '../src/views/InputView.js';

import { validateNumber, validateUserMoney } from '../src/validators/InputValidator.js';

import { INVALID_USER_MONEY_ERROR_MESSAGE, INVALID_NUMBER_ERROR_MESSAGE } from '../src/constants/message.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 테스트하기', () => {
  describe('구입금액 입력받기', () => {
    test('구입금액을 정수로 입력받는다', async () => {
      const inputs = ['1000'];
      mockQuestions(inputs);

      const userMoney = await getUserMoney();
      expect(userMoney).toBe(1000);
    });
  });
  describe('구입금액 유효성 검사하기', () => {
    test('사용자의 구입금액이 1,000원으로 나누어 떨어지지 않는다면 예외 처리한다.', () => {
      expect(() => validateUserMoney(100)).toThrow(INVALID_USER_MONEY_ERROR_MESSAGE);
      expect(() => validateUserMoney(10005)).toThrow(INVALID_USER_MONEY_ERROR_MESSAGE);
    });

    test('사용자의 구입금액이 1,000원으로 나누어 떨어진다면 예외 처리하지 않는다.', () => {
      expect(() => validateUserMoney(1000)).not.toThrow();
    });
  });

  describe('당첨 번호 입력받기', () => {
    test('당첨 번호를 정수 배열로 입력받는다', async () => {
      const inputs = ['1, 2, 3, 4, 5, 6'];
      mockQuestions(inputs);

      const winningNumber = await getWinningNumbers();
      expect(winningNumber).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('보너스 번호 입력받기', () => {
    test('보너스 번호를 정수로 입력받는다', async () => {
      const inputs = ['11'];
      mockQuestions(inputs);

      const bonusNumber = await getBonusNumber();
      expect(bonusNumber).toBe(11);
    });
  });
});

describe('공통적인 예외 처리', () => {
  test('입력 값이 정수가 아닌 값이라면 예외 처리한다.', () => {
    expect(() => validateNumber(undefined)).toThrow(INVALID_NUMBER_ERROR_MESSAGE);
    expect(() => validateNumber('Hi')).toThrow(INVALID_NUMBER_ERROR_MESSAGE);
  });
  test('입력 값이 정수 값이라면 예외 처리하지 않는다.', () => {
    expect(() => validateNumber(1000)).not.toThrow();
    expect(() => validateNumber('5000')).not.toThrow();
  });
});
