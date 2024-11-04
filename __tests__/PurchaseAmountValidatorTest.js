import PurchaseAmountValidator from '../src/utils/PurchaseAmountValidator.js';
import { PURCHASE_ERRORS } from '../src/constants/constants.js';

describe('PurchaseAmountValidator', () => {
  test('1000으로 나누어지면 에러가 발생하지 않는다', () => {
    expect(() => {
      PurchaseAmountValidator.validateDivisibleBy1000(8000);
    }).not.toThrow();
  });

  test('1000으로 나누어지지 않으면 에러가 발생한다', () => {
    expect(() => {
      PurchaseAmountValidator.validateDivisibleBy1000(999);
    }).toThrow(PURCHASE_ERRORS.NOT_DIVIDED_1000);
  });
});
