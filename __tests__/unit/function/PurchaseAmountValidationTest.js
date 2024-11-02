import LottoController from '../../../src/components/LottoController.js';

const ERROR = '[ERROR]';

describe('구입 금액 검증 테스트, 정상 테스트', () => {
  test('구입 금액 : 5000원 ', () => {
    const lottoController = new LottoController();
    lottoController.setPurchaseAmount(5000);
    const purchaseAmount = lottoController.getPurchaseAmount();
    expect(purchaseAmountValidator(purchaseAmount)).toBeTruthy();
  });
});

describe('구입 금액 검증 테스트, 예외 테스트', () => {
  test('음수 검증, 구입 금액 : -1000원', () => {
    const purchaseAmount = -1000;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });

  test('음수 검증, 구입 금액 : -6000원', () => {
    const purchaseAmount = -6000;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('음수 검증, 구입 금액 : -3235원', () => {
    const purchaseAmount = -3235;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('단위 검증, 구입 금액 : 1333원', () => {
    const purchaseAmount = 1333;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('단위 검증 구입 금액 : 34.56원', () => {
    const purchaseAmount = 34.56;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
});
