import PurchaseAmountValidationStrategy from '../src/validation/purchase-amount-validation.strategy.js';

/**
 *
 * @param {number} purchaseAmount
 * @returns {number}
 */
function parsePurchaseAmount(purchaseAmount) {
  return Number(purchaseAmount);
}

/**
 *
 * @param {number} purchaseAmount
 * @returns {PurchaseAmountValidationStrategy}
 */
function generatePurchaseAmountValidationStrategy(purchaseAmount) {
  return new PurchaseAmountValidationStrategy(purchaseAmount, parsePurchaseAmount);
}

describe('purchaseAmountValidationStrategy', () => {
  describe('validate', () => {
    it.each([
      {
        description: '구입 금액으로 빈 값이 입력된 경우 에러를 발생시켜야 한다',
        input: '',
        expectedError: PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_CAN_NOT_BE_EMPTY,
      },
      {
        description: '구입 금액으로 음수가 입력된 경우 에러를 발생시켜야 한다',
        input: '-1',
        expectedError:
          PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: '구입 금액으로 실수가 입력된 경우 에러를 발생시켜야 한다',
        input: '0.125',
        expectedError:
          PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: '구입 금액으로 0이 입력된 경우 에러를 발생시켜야 한다',
        input: '0',
        expectedError:
          PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: `구입 금액을 ${PurchaseAmountValidationStrategy.STRATEGY.DIVISOR}로 나눌 수 없는 경우 에러를 발생시켜야 한다`,
        input: `${PurchaseAmountValidationStrategy.STRATEGY.DIVISOR + 1}`,
        expectedError:
          PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_MUST_BE_IN_MULTIPLES_OF_DIVISOR,
      },
      {
        description: `구입 금액이 ${PurchaseAmountValidationStrategy.STRATEGY.LIMITATION}를 넘는 경우 에러를 발생시켜야 한다`,
        input: `${PurchaseAmountValidationStrategy.STRATEGY.LIMITATION * 10}`,
        expectedError:
          PurchaseAmountValidationStrategy.ERROR_MESSAGE.AMOUNT_MUST_BE_IN_MAX_SAFE_INTEGER,
      },
    ])('$description', ({ input, expectedError }) => {
      const purchaseAmountValidationStrategy = generatePurchaseAmountValidationStrategy(input);

      expect(() => purchaseAmountValidationStrategy.validate()).toThrow(expectedError);
    });
  });
});
