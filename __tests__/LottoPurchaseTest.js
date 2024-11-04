import LottoPurchase from '../src/models/LottoPurchase.js';
import { INPUT_ERROR, PRICE_ERROR } from '../src/constants/error.js';

describe('로또 구매 금액', () => {
  test.each([
    { price: '5000', expected: 5 },
    { price: '3000', expected: 3 },
  ])('구입 금액에 따라 로또 개수 계산 - %s', ({ price, expected }) => {
    const lottoPurchase = new LottoPurchase(price);
    expect(lottoPurchase.getLottoCount()).toBe(expected);
  });

  test.each([
    { price: '', error: INPUT_ERROR.inputBlankError },
    { price: 'abc', error: INPUT_ERROR.inputTypeError },
    { price: '5500', error: PRICE_ERROR.priceUnitError },
  ])('유효하지 않은 금액 입력 - %s', ({ price, error }) => {
    expect(() => new LottoPurchase(price)).toThrow(error);
  });
});
