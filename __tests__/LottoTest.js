import Lotto from "../src/Lotto";
import { ERROR_MESSAGE } from "../src/constants/errorMessage";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_COUNT);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
  });

  test("로또 번호가 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      // 입력값이 없으면 빈 문자열이 number로 형변환되어 0이 되기 때문에
      // [0]이 입력된 경우로 가정하여 예외 발생 처리
      new Lotto([0]);
    }).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });

  test("로또 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "three", 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.WINNING_PURCHASE_INVALID);
  });

  test("로또 번호가 1과 45 사이가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 6]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_FORMAT);
  });
});
