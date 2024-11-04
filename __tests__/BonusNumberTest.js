/* eslint-disable no-new */
import BonusNumber from "../src/BonusNumber.js";
import { ERROR_MESSAGE } from "../src/constants/messages.js";
import Lotto from "../src/Lotto.js";

describe("보너스 번호 클래스 테스트", () => {
  let winningLotto;
  beforeEach(() => {
    winningLotto = new Lotto("1,2,3,4,5,6");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(2, winningLotto);
    }).toThrow(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE);
  });

  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(",", winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_A_NUMBER_LOTTO);
  });

  test("보너스 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(10.3, winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test("보너스 번호가 숫자가 범위 밖에 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(70, winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_IN_RANGE);
  });
});
