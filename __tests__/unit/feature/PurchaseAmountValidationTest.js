import purchaseAmountValidator from '../../../src/utils/validation/purchaseAmountValidator.js';

const ERROR = '[ERROR]';

describe('구입 금액 검증 테스트, 정상 테스트', () => {
  test('구입 금액 : 5000원 ', () => {
    const purchaseAmount = '5000';
    expect(() => purchaseAmountValidator(purchaseAmount)).not.toThrow();
  });
});

describe('구입 금액 검증 테스트, 예외 테스트', () => {
  test('양수 검증 구입 금액 : abc', () => {
    const purchaseAmount = 'abc';
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });

  test('양수 검증 구입 금액 : ', () => {
    const purchaseAmount = '';
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });

  test('양수 검증, 구입 금액 : -1000원', () => {
    const purchaseAmount = -1000;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });

  test('양수 검증, 구입 금액 : -6000원', () => {
    const purchaseAmount = -6000;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('양수 검증, 구입 금액 : -3235원', () => {
    const purchaseAmount = -3235;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('양수 검증, 구입 금액 : 1333원', () => {
    const purchaseAmount = 1333;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
  test('단위 검증 구입 금액 : 34.56원', () => {
    const purchaseAmount = 34.56;
    expect(() => purchaseAmountValidator(purchaseAmount)).toThrow(ERROR);
  });
});
