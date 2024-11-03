import BonusLotto from "../src/BonusLotto";
import { ERROR_MESSAGE } from "../src/constants/errorMessage.js";

describe("BonusLotto 클래스 테스트", () => {
  test("보너스 번호가 입력되지 않으면 예외 발생", () => {
    expect(() => {
      new BonusLotto(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });

  test("보너스 번호 범위가 1-45가 아닐 경우 예외 발생", () => {
    expect(() => {
      new BonusLotto(66, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.BONUS_NUMBER_FORMAT);

    expect(() => {
      new BonusLotto(-5, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.BONUS_NUMBER_FORMAT);
  });

  test("보너스 번호와 당첨 번호가 중복될 경우 예외 발생", () => {
    expect(() => {
      new BonusLotto(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.BONUS_NOT_IN_WINNING_NUMBERS);
  });

  test("보너스 번호가 숫자가 아닐 경우 예외 발생", () => {
    expect(() => {
      new BonusLotto("three", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.BONUS_INVALID);
  });
});
