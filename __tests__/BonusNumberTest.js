/* eslint-disable no-new */
import BonusNumber from "../src/BonusNumber.js";
import Lotto from "../src/Lotto.js";

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 2;

    expect(() => {
      new BonusNumber(winningLotto, bonusNumber);
    }).toThrow("[ERROR]");
  });
});
