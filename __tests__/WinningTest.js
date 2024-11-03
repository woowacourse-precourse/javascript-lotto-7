import WinningCalculator from "../src/WinningCalculator";
import PRIZE_TABLE from "../src/constants/lottoPrizeTable";

describe("WinningCalculator 테스트", () => {
  const winningSet = {
    winningNumbers: [1, 2, 3, 4, 5, 6], 
    bonusNumber: 7,                    
  };

  test("티켓이 하나일 떄 테스트", () => {
    const calculator = new WinningCalculator(winningSet, [[1, 2, 3, 9, 12, 15]]);
    const {rankResult, profit, rateOfReturn} = calculator.result;
    expect(rankResult.fifth).toBe(1); 
  });

  test("1등, 2등, 3등, 4등, 5등, 꽝 테스트", () => {
    const generatedNumbers = [
      [1, 2, 3, 4, 5, 6],         
      [1, 2, 3, 4, 5, 7],          
      [1, 2, 3, 4, 5, 8],          
      [1, 2, 3, 4, 10, 11],        
      [1, 2, 3, 15, 20, 25],       
      [10, 11, 12, 13, 14, 15],    
    ];

    const calculator = new WinningCalculator(winningSet, generatedNumbers);
    const {rankResult, profit, rateOfReturn} = calculator.result;

    expect(rankResult.first).toBe(1);   
    expect(rankResult.second).toBe(1);  
    expect(rankResult.third).toBe(1);   
    expect(rankResult.fourth).toBe(1); 
    expect(rankResult.fifth).toBe(1);   
  });

  test("모든 티켓이 꽝인 경우", () => {
    const generatedNumbers = [
      [10, 11, 12, 13, 14, 15],
      [20, 21, 22, 23, 24, 25],
    ];

    const calculator = new WinningCalculator(winningSet, generatedNumbers);
    const {rankResult, profit, rateOfReturn} = calculator.result;

    expect(rankResult.first).toBe(0);
    expect(rankResult.second).toBe(0);
    expect(rankResult.third).toBe(0);
    expect(rankResult.fourth).toBe(0);
    expect(rankResult.fifth).toBe(0);
  });

  test("총 수익을 올바르게 계산한다(1개)", () => {
    const generatedTickets = [[1, 2, 3, 4, 5, 6]];
      
    const calculator = new WinningCalculator(winningSet, generatedTickets);
    const totalProfit = calculator.caculateTotalProfit();

    const expectedProfit = PRIZE_TABLE.first.prize
  

    expect(totalProfit).toBe(expectedProfit);
  });

  test("총 수익을 올바르게 계산한다", () => {
    const generatedTickets = [
      [1, 2, 3, 4, 5, 6],          
      [1, 2, 3, 4, 5, 7],          
      [1, 2, 3, 4, 5, 8],          
      [1, 2, 3, 4, 10, 11],        
      [1, 2, 3, 15, 20, 25],       
      [10, 11, 12, 13, 14, 15],    
    ];

    const calculator = new WinningCalculator(winningSet, generatedTickets);
    const totalProfit = calculator.caculateTotalProfit();

    const expectedProfit = 
      PRIZE_TABLE.first.prize + 
      PRIZE_TABLE.second.prize + 
      PRIZE_TABLE.third.prize + 
      PRIZE_TABLE.fourth.prize + 
      PRIZE_TABLE.fifth.prize;

    expect(totalProfit).toBe(expectedProfit);
  });

  test("수익률을 소수점 두 자리까지 올바르게 계산한다", () => {
    const generatedTickets = [
      [1, 2, 3, 4, 5, 6],         
      [1, 2, 3, 4, 5, 7],          
      [1, 2, 3, 4, 5, 8],          
      [1, 2, 3, 4, 10, 11],        
      [1, 2, 3, 15, 20, 25],       
      [10, 11, 12, 13, 14, 15],   
    ];

    const calculator = new WinningCalculator(winningSet, generatedTickets);
    const rateOfReturn = calculator.calculateRateOfReturn();

    const expectedProfit = 
      PRIZE_TABLE.first.prize + 
      PRIZE_TABLE.second.prize + 
      PRIZE_TABLE.third.prize + 
      PRIZE_TABLE.fourth.prize + 
      PRIZE_TABLE.fifth.prize;
    const expectedRateOfReturn = (expectedProfit / (generatedTickets.length * 1000)* 100).toFixed(1);

    expect(rateOfReturn).toBe(expectedRateOfReturn);
  });
});
