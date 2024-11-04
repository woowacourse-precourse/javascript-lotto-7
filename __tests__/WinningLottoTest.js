import WinningLotto from "../src/lotto/WinningLotto";

describe("WinningLotto 클래스 테스트", () => {
  test("당첨 번호 설정", () => {
    const winningLotto = new WinningLotto();
    winningLotto.setWinningNumbers([5, 12, 23, 32, 38, 42]);

    const winningNumbersArray = winningLotto.getWinningNumbersArray();
    expect(winningNumbersArray[5]).toBe(1);
    expect(winningNumbersArray[12]).toBe(1);
    expect(winningNumbersArray[42]).toBe(1);
  });

  test("보너스 번호 설정", () => {
    const winningLotto = new WinningLotto();
    winningLotto.setBonusNumber(7);

    const winningNumbersArray = winningLotto.getWinningNumbersArray();
    expect(winningNumbersArray[7]).toBe(2);
  });
});
