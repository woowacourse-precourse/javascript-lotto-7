import Bank from '../src/Bank.js';

describe('Bank 클래스 테스트', () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test.each([
    {
      rankInfo: [0, 0, 1, 0, 0],
      purchaseAmount: 3000,
      profitRate: '50000.0',
    },
    {
      rankInfo: [1, 0, 0, 0, 0],
      purchaseAmount: 3000,
      profitRate: '66666666.7',
    },
    {
      rankInfo: [0, 0, 0, 0, 1],
      purchaseAmount: 3000,
      profitRate: '166.7',
    },
  ])(
    '당첨 정보를 받아 최종 당첨금을 계산하고 수익률을 계산한다.',
    ({ rankInfo, purchaseAmount, profitRate }) => {
      bank.calculateTotalWinningPrize(rankInfo);
      bank.calculateProfitRate(purchaseAmount);

      expect(bank.getProfitRate()).toBe(profitRate);
    },
  );
});
