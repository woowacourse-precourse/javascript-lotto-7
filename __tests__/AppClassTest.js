import App from "../src/App.js";
import { BONUS, lotteryStatistics } from "../src/constants.js";
import { printResult, printPercent } from "../src/handler/printHandlers.js";
import Lotto from "../src/Lotto.js";

jest.mock("../src/handler/printHandlers");

describe("App 클래스 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.clearAllMocks();
  });


  test("checkWins 함수에 [5, 7]이 전달되는가?", () => {
    const lotteries = [
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 5, 7]),
    ];
    const users = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const result = app.calculateMatches(lotteries, users, bonus);

    expect(result).toEqual([5, 7]);
  });

  test("checkWins에게 특정 matches를 주었을 때 lotteryStatistics의 특정 객체의 속성을 잘 바꾸는가", () => {
    const matches = [3, 3, 3, 3];

    app.checkWins(matches);

    const threeMatches = lotteryStatistics.find(stat => stat.matches === 3);
    expect(threeMatches).toBeDefined();
    expect(threeMatches.amount).toBe(4);

    const fiveMatches = lotteryStatistics.find(stat => stat.matches === 5);
    expect(fiveMatches).toBeDefined();
    expect(fiveMatches.amount).toBe(0);
  });

  test("showProfitRate 메서드가 정확한 총 수익률을 내는가?", () => {
    const results = [
      { price: 5000, amount: 1 },
      { price: 2000, amount: 1 },
    ];
    const tickets = 2;

    app.showProfitRate(results, tickets);

    const expectedRate = Math.round(((5000 + 2000) / tickets) * 100 * 100) / 100;
    expect(printPercent).toHaveBeenCalledWith(expectedRate);
  });

});
