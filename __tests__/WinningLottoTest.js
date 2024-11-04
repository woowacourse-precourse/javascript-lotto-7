import WinningLotto from "../src/Model/WinningLotto.js";

describe("WinningLotto 테스트", () => {
  let winningLotto;

  beforeEach(() => {
    winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
  });

  test("WinningLotto 데이터 저장 테스트", () => {
    const winningNumbers = winningLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(bonusNumber).toBe(7);
  });
});
