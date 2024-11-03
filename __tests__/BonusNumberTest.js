/* eslint-disable no-new */
import BonusNumber from "../src/BonusNumber.js";
import Lotto from "../src/Lotto.js";

describe("보너스 번호 클래스 테스트", () => {
  let winningLotto;
  beforeEach(() => {
    winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(winningLotto, 2);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(winningLotto, ",");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(winningLotto, 10.3);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 범위 밖에 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(winningLotto, 70);
    }).toThrow("[ERROR]");
  });
});
