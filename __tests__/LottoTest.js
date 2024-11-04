import Lotto from "../src/Lotto";
import { Errors } from "../src/constants.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(Errors.lotto.NOT_SIX_NUMBER);
  });

  test("로또 번호에 개수가 6개가 안되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(Errors.lotto.NOT_SIX_NUMBER);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(Errors.lotto.NOT_UNIQUE_NUMBER);
  });

  test("로또 번호가 1과 45 사이가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(Errors.lotto.NOT_VALID_RANGE);
  });

  test("로또 번호는 숫자여야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "s"]);
    }).toThrow(Errors.lotto.NOT_NUMBER);
  });
});
