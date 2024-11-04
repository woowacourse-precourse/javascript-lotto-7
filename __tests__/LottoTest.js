import Lotto from "../src/Model/Lotto.js";
import { WINNING_NUMBERS_ERROR } from "../src/Message/Message";

describe("로또 클래스 테스트", () => {
  test("로또 번호 중에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, "a", 6]);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_NUMBER);
  });

  test("로또 번호 중에 실수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.1, 2, 3, 4, 5, 6]);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_INTEGER);
  });

  test("로또 번호의 범위가 1~45까지가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_RANGE);
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_NOT_SIX_LENGTH);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(WINNING_NUMBERS_ERROR.IS_DUPLICATE_NUMBER);
  });
});
