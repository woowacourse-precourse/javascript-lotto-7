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
});
