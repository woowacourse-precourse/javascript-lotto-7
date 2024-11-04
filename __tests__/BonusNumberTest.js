import WinningNumbers from "../src/WinningNumbers";
import { WINNING_NUMBERS_ERROR } from "../src/Message/Message";

describe("보너스 번호 테스트", () => {
  const winningNumTestInst = new WinningNumbers();
  test("보너스 번호 중에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      winningNumTestInst.setBonusNumber("a");
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_NUMBER);
  });

  test("보너스 번호 중에 실수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      winningNumTestInst.setBonusNumber(1.23);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_INTEGER);
  });

  test("보너스 번호의 범위가 1~45까지가 아니면 예외가 발생한다.", () => {
    expect(() => {
      winningNumTestInst.setBonusNumber(50);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_RANGE);
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      winningNumTestInst.setWinningLotto("1,2,3,4,5,6");
      winningNumTestInst.setBonusNumber(6);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_DUPLICATE_NUMBER);
  });
});
