import Lotto from "../src/Lotto";
import { ERROR_MESSAGES } from "../src/constants/constants.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS_COUNT);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
  });

  test("로또 번호가 쉼표로 구분되지 않은 형식으로 입력된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1 2 3 4 5 6");
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS_FORMAT);
  });

  test("로또 번호에 숫자 이외의 값이 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "a", 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS_NAN);
  });
});
