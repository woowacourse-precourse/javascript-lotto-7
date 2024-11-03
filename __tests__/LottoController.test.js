// LottoController.test.js
import LottoController from "../src/controllers/LottoController.js";
import PurchasedLotto from "../src/models/PurchasedLotto.js";

describe("LottoController", () => {
  let controller;

  beforeEach(() => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const purchasedLotto = new PurchasedLotto(2000);
    controller = new LottoController(
      winningNumbers.join(","),
      bonusNum,
      purchasedLotto
    );
  });

  test("valid start with winning numbers", () => {
    const consoleSpy = jest.spyOn(console, "log");
    controller.start();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("calculate match count via public method", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    controller.checkWinningNumbers(numbers);
    expect(controller.getMatchCount()).toBe(6);
  });

  test("check bonus ball match via public method", () => {
    const numbers = [1, 2, 3, 4, 5, 7];
    controller.checkWinningNumbers(numbers);
    expect(controller.isBonusBallMatched()).toBe(true);
  });

  test("calculate profit rate via public method", () => {
    const awards = { 6: 1 };
    controller.setAwards(awards);
    const profitRate = controller.getProfitRate();
    expect(profitRate).toBeGreaterThan(0);
  });
});
