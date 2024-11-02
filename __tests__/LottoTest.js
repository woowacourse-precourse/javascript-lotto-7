import { ERROR_MESSAGE } from "../src/constants/Constants.js";
import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호에 숫자가 아닌 문자가 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 8, "a"]);
    }).toThrow(ERROR_MESSAGE.ANSWER_NUMBER_ERROR);
  });

  test("로또 번호의 개수가 6개가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.ANSWER_COUNT_ERROR);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.ANSWER_DUPLICATE_ERROR);
  });

  test("로또 번호가 1~45 사이 숫자가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 71]);
    }).toThrow(ERROR_MESSAGE.ANSWER_RANGE_ERROR);
  });
});
