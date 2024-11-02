import LottoMachine from '../../src/model/LottoMachine.js';

describe("LottoMachine 클래스의 로또 개수 계산 테스트", () => {
  test.each([
    { purchaseAmount: "1000", expectedCount: 1 },         
    { purchaseAmount: "50000", expectedCount: 50 },      
  ])("구입 금액에 따라 올바른 로또 개수를 반환해야 한다", ({ purchaseAmount, expectedCount }) => {

    const amount = purchaseAmount;

    const lottoMachine = new LottoMachine(amount);
    const lottoCount = lottoMachine.getLottoCount();

    expect(lottoCount).toBe(expectedCount);
  });
});
