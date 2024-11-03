import Lotto from "../src/Lotto";
import { ERROR_MESSAGES } from "../src/constants.js";

describe("로또 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);
  });

  test("당첨 번호에 중복된 숫자가 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
  });

  test("당첨 번호에 숫자가 아닌 값이 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, "a", 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBER_TYPE);
  });

  test("당첨 번호가 1에서 45 사이의 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
  });

  test("당첨 번호가 1에서 45 사이의 중복되지 않는 6개의 숫자로 구성된 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();

    expect(() => {
      new Lotto([10, 20, 30, 40, 41, 42]);
    }).not.toThrow();
  });
});
