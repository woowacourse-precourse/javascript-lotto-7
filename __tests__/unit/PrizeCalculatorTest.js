import PrizeCalculator from '../../src/model/PrizeCalculator.js';

describe("getTotalPrize() 테스트", () => {
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
    const totalPrize = prizeCalculator.getTotalPrize();
    const expectedPrize = 2000000000 + 30000000 + 1500000 + 50000 + 5000; 
    expect(totalPrize).toBe(expectedPrize);
  });

  test("미당첨 결과는 상금 계산에 포함되지 않아야 한다", () => {
    const totalPrize = prizeCalculator.getTotalPrize();
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
    const totalPrize = prizeCalculator.getTotalPrize();
    expect(totalPrize).toBe(0);
  });
});

describe("getStatistics() 테스트", () => {
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

  test("각 등수에 대한 통계가 올바르게 계산되어야 한다", () => {
    const statistics = prizeCalculator.getStatistics();
    const expectedStatistics = {
      1: { count: 1, prize: 2000000000 },
      2: { count: 1, prize: 30000000 },
      3: { count: 1, prize: 1500000 },
      4: { count: 1, prize: 50000 },
      5: { count: 1, prize: 5000 },
    };
    
    expect(statistics).toEqual(expectedStatistics);
  });

  test("모든 결과가 미당첨인 경우 각 등수의 통계가 0이어야 한다", () => {
    const noPrizeResults = [
      { matchCount: 2, isBonusMatched: false },
      { matchCount: 1, isBonusMatched: false },
      { matchCount: 0, isBonusMatched: false },
    ];

    prizeCalculator = new PrizeCalculator(noPrizeResults);
    const statistics = prizeCalculator.getStatistics();
    const expectedStatistics = {
      1: { count: 0, prize: 0 },
      2: { count: 0, prize: 0 },
      3: { count: 0, prize: 0 },
      4: { count: 0, prize: 0 },
      5: { count: 0, prize: 0 },
    };

    expect(statistics).toEqual(expectedStatistics);
  });
});
