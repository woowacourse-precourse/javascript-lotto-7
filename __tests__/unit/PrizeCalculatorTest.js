import PrizeCalculator from '../../src/model/PrizeCalculator.js';

describe("PrizeCalculator 클래스 테스트", () => {
  let prizeCalculator;

  beforeEach(() => {
    const results = [
      { matchCount: 6, isBonusMatched: false },  
      { matchCount: 5, isBonusMatched: true },   
      { matchCount: 5, isBonusMatched: false },  
      { matchCount: 4, isBonusMatched: false },  
      { matchCount: 3, isBonusMatched: false }, 
      { matchCount: 2, isBonusMatched: false }, 
    ];
    
    prizeCalculator = new PrizeCalculator(results);
  });

  test("1등부터 5등까지의 매칭 결과에 따라 올바른 상금을 계산해야 한다", () => {
    const totalPrize = prizeCalculator.getPrize();
    const expectedPrize = 2000000000 + 30000000 + 1500000 + 50000 + 5000; 
    expect(totalPrize).toBe(expectedPrize);
  });

  test("미당첨 결과는 상금 계산에 포함되지 않아야 한다", () => {
    const totalPrize = prizeCalculator.getPrize();
    const expectedPrize = 2000000000 + 30000000 + 1500000 + 50000 + 5000; 
    expect(totalPrize).toBe(expectedPrize);
  });

  test("모든 결과가 미당첨인 경우 총 상금은 0이어야 한다", () => {
    const noPrizeResults = [
      { matchCount: 2, isBonusMatched: false },
      { matchCount: 1, isBonusMatched: false },
      { matchCount: 0, isBonusMatched: false },
    ];

    prizeCalculator = new PrizeCalculator(noPrizeResults);
    const totalPrize = prizeCalculator.getPrize();
    expect(totalPrize).toBe(0);
  });
});
