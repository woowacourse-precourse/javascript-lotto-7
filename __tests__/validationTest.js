import {
  validatePurchaseAmount,
  validateWinningNumber,
  validateBonus,
} from '../src/utils/validation.js';
import ERROR_MESSAGES from '../src/constants/errorConstants.js';

describe('유효성 검사 테스트', () => {
  describe('구매 금액 입력값 검증 테스트', () => {
    test.each([
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: 'abc',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: '1000-',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: '100ㅔ0',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 1000원 단위로 나눠지지 않는 경우',
        input: '2100',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND,
      },
      {
        description: '구매 금액이 1000원 단위로 나눠지지 않는 경우',
        input: '-2100',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND,
      },
      {
        description: '로또를 한 장도 구매하지 않는 경우',
        input: '0',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO,
      },
      {
        description: '로또를 한 장도 구매하지 않는 경우',
        input: '-2000',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => validatePurchaseAmount(input)).toThrow(expectedError);
    });

    test('구매금액이 숫자이고 1000원 단위로 나눠지는 경우', () => {
      expect(() => validatePurchaseAmount('5000')).not.toThrow();
    });
  });

  describe('당첨 번호 유효성 검사 테스트', () => {
    test.each([
      {
        description: '당첨 번호에 숫자가 아닌 값이 포함된 경우',
        input: '1,2,3,abc,5,6',
        expectedError: ERROR_MESSAGES.WINNING_NUMBER_IS_NOT_NUMBER,
      },
      {
        description: '당첨 번호에 범위를 벗어나는 숫자가 포함된 경우',
        input: '1,2,3,4,5,50',
        expectedError: ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_BOUNDS,
      },
      {
        description: '당첨 번호가 6개가 아닌 경우',
        input: '1',
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBER_COUNT,
      },
      {
        description: '당첨 번호가 6개가 아닌 경우',
        input: '1, 2, 3, 4, 5, 6, 7',
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBER_COUNT,
      },
      {
        description: '당첨 번호가 6개가 아닌 경우',
        input: '1, 2, 3, 4, 5',
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBER_COUNT,
      },
      {
        description: '당첨 번호에 빈 값이 포함된 경우',
        input: '1, 2, 3, 4, , 6',
        expectedError: ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_BOUNDS,
      },
      {
        description: '빈 값이 들어가는 경우',
        input: '',
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBER_COUNT,
      },
      {
        description: '당첨 번호에 중복된 숫자가 포함된 경우',
        input: '1,2,3,4,5,5',
        expectedError: ERROR_MESSAGES.DUPLICATE_NUMBER_IN_WINNING_NUMBER,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    });

    test('정상적인 당첨 번호 입력하는 경우', () => {
      expect(() => validateWinningNumber('1,2,3,4,5,6')).not.toThrow();
    });
  });

  describe('보너스 번호 유효성 검사 테스트', () => {
    test.each([
      {
        description: '보너스 번호가 숫자가 아닌 값일 경우',
        input: 'abc',
        winningNumbers: '1,2,3,4,5,6',
        expectedError: ERROR_MESSAGES.BONUS_NUMBER_IS_NOT_NUMBER,
      },
      {
        description: '보너스 번호가 범위를 벗어나는 경우',
        input: '50',
        winningNumbers: '1,2,3,4,5,6',
        expectedError: ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_BOUNDS,
      },
      {
        description: '보너스 번호가 당첨 번호와 중복되는 경우',
        input: '6',
        winningNumbers: '1,2,3,4,5,6',
        expectedError: ERROR_MESSAGES.DUPLICATE_NUMBER_IN_WINNING_AND_BONUS,
      },
    ])('$description', ({ input, winningNumbers, expectedError }) => {
      expect(() => validateBonus(input, winningNumbers)).toThrow(expectedError);
    });

    test('정상적인 보너스 번호 입력하는 경우', () => {
      expect(() => validateBonus('10', '1,2,3,4,5,6')).not.toThrow();
    });
  });
});
