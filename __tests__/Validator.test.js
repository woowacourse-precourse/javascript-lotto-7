import Validator from '../src/utils/validator.js';
import { ERRORS } from '../src/constants/errors.js';

describe('Validator 클래스 테스트', () => {
  describe('구매 금액 검증 테스트', () => {
    test.each([
      {
        description: '1000원 단위가 아닌 금액',
        price: 1500,
        expectedError: ERRORS.INVALID_PURCHASE_PRICE_UNIT,
      },
      {
        description: '음수 금액',
        price: -1000,
        expectedError: ERRORS.INVALID_PURCHASE_PRICE,
      },
      {
        description: '0원',
        price: 0,
        expectedError: ERRORS.INVALID_PURCHASE_PRICE,
      },
      {
        description: '정수가 아닌 금액',
        price: 1000.5,
        expectedError: ERRORS.INVALID_NUMBER_TYPE,
      },
    ])('$description', ({ price, expectedError }) => {
      expect(() => {
        Validator.validatePurchasePrice(price);
      }).toThrow(expectedError);
    });
  });

  describe('당첨 번호 검증 테스트', () => {
    test.each([
      {
        description: '6개 초과 번호',
        numbers: [1, 2, 3, 4, 5, 6, 7],
        expectedError: ERRORS.INVALID_WINNING_NUMBER_LENGTH,
      },
      {
        description: '중복된 번호',
        numbers: [1, 2, 3, 4, 5, 5],
        expectedError: ERRORS.INVALID_DUPLICATE_WINNING_NUMBER,
      },
      {
        description: '범위 초과 번호',
        numbers: [1, 2, 3, 4, 5, 46],
        expectedError: ERRORS.INVALID_NUMBER_RANGE,
      },
    ])('$description', ({ numbers, expectedError }) => {
      expect(() => {
        Validator.validateWinningNumber(numbers);
      }).toThrow(expectedError);
    });
  });

  describe('보너스 번호 검증 테스트', () => {
    test.each([
      {
        description: '당첨 번호와 중복',
        bonus: 6,
        winningNumbers: [1, 2, 3, 4, 5, 6],
        expectedError: ERRORS.INVALID_DUPLICATE_BONUS_NUMBER,
      },
      {
        description: '범위 초과 번호',
        bonus: 46,
        winningNumbers: [1, 2, 3, 4, 5, 6],
        expectedError: ERRORS.INVALID_NUMBER_RANGE,
      },
    ])('$description', ({ bonus, winningNumbers, expectedError }) => {
      expect(() => {
        Validator.validateBonusNumber(bonus, winningNumbers);
      }).toThrow(expectedError);
    });
  });
});
