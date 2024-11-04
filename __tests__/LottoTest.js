import Lotto from "../src/Lotto";
import { ERROR_MESSAGE } from "../src/constants/error";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.DUPLICATED_LOTTO_NUMBER);
  });

  test("로또 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  });

  test("로또 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  });

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "six"]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  });

  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
  });

  test("유효한 로또 번호는 객체가 정상적으로 생성된다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
