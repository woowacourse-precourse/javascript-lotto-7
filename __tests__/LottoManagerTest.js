import LottoManager from '../src/LottoManager';
import { ERROR_MESSAGE, RULE } from '../src/constants/index.js';

describe('구매 금액 검증', () => {
  let lottoManager;

  beforeEach(() => {
    lottoManager = new LottoManager();
  });

  test('구매 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lottoManager.validatePrice('1000원');
    }).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
  });

  test('구매 금액이 1000원 미만이면 예외가 발생한다.', () => {
    expect(() => {
      lottoManager.validatePrice(900);
    }).toThrow(ERROR_MESSAGE.OUT_OF_RANGE_PRICE(RULE.LOTTO_PRICE));
  });

  test('구매 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lottoManager.validatePrice(1500);
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT(RULE.LOTTO_PRICE));
  });
});
