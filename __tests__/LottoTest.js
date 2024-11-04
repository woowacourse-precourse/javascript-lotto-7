import Lotto from "../src/models/Lotto.js";
import { ERROR_MESSAGES } from "../src/config/errors.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_NUMBER);
  });

  test("로또 번호에 1~45 범위를 벗어난 숫자가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
  });

  test("올바른 로또 번호는 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("로또 번호는 오름차순으로 정렬되어야 한다.", () => {
    const lotto = new Lotto([6, 2, 4, 1, 3, 5]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

