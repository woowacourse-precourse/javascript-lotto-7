
import Calculator from "../src/utils/Calculator.js";
import { number } from "../src/constants.js";

describe("통계 테스트", () => {
    test("3개 일치 시 통계가 올바르게 기록된다.", () => {
        const statisticsCountMap = new Map();
        statisticsCountMap.set(number.THREE, 1);
        statisticsCountMap.set(number.FOUR, 0);
        statisticsCountMap.set(number.FIVE, 0);
        statisticsCountMap.set(number.FIVE_BONUS, 0);
        statisticsCountMap.set(number.SIX, 0);
    
        const result = Calculator.sum(statisticsCountMap);
        expect(result).toBe(5000);
      });

    test("6개 일치 시 통계가 올바르게 기록된다.", () => {
        const statisticsCountMap = new Map();
        statisticsCountMap.set(number.THREE, 0);
        statisticsCountMap.set(number.FOUR, 0);
        statisticsCountMap.set(number.FIVE, 0);
        statisticsCountMap.set(number.FIVE_BONUS, 0);
        statisticsCountMap.set(number.SIX, 1);
    
        const result = Calculator.sum(statisticsCountMap);
        expect(result).toBe(2000000000);
      });

    test("5개 일치 + 보너스 번호 일치 시 통계가 올바르게 기록된다.", () => {
        const statisticsCountMap = new Map();
        statisticsCountMap.set(number.THREE, 0);
        statisticsCountMap.set(number.FOUR, 0);
        statisticsCountMap.set(number.FIVE, 0);
        statisticsCountMap.set(number.FIVE_BONUS, 1);
        statisticsCountMap.set(number.SIX, 0);
    
        const result = Calculator.sum(statisticsCountMap);
        expect(result).toBe(30000000);
      });

    test("수익률이 올바르게 계산된다.", () => {
        const statisticsCountMap = new Map();
        statisticsCountMap.set(number.THREE, 2); 
        statisticsCountMap.set(number.FOUR, 1);
        statisticsCountMap.set(number.FIVE, 0);
        statisticsCountMap.set(number.FIVE_BONUS, 0);
        statisticsCountMap.set(number.SIX, 0);
    
        const totalEarnings = Calculator.sum(statisticsCountMap);
        const userMoney = 8000;
        const earningsRate = Calculator.earningsRate(userMoney, totalEarnings);
    
        expect(earningsRate).toBe("750.0");
      });

});
