import { ERROR_MESSAGES } from "../src/constants/messages";
import Lotto from "../src/model/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(`${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.INCORRECT_LENGTH}`);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(`${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.DUPLICATE_FOUND}`);
  });

  test("로또 번호가 없다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto();
    }).toThrow(`${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.EMPTY_INPUT}`);
  });

  test("로또 번호가 숫자 타입이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["a", 2, 3, 4, 5, 6]);
    }).toThrow(`${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.NON_NUMERIC}`);
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(`${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.OUT_OF_RANGE}`);
  });
});
