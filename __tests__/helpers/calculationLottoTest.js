import calculationLotto from '../../src/helpers/calculationLotto';

describe('calculationLotto 테스트', () => {
  test('count 함수가 올바른 로또 개수를 반환하는지 테스트', () => {
    const purchasePrice = 5000;
    const expectedCount = 5; // LOTTO_CONFIG.PRICE가 1000일 경우
    expect(calculationLotto.count(purchasePrice)).toBe(expectedCount);
  });
});
