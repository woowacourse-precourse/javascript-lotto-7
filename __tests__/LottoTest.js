import Lotto from "../src/models/Lotto.js";
import { ERROR_MESSAGES } from "../src/constants/Errors.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.invalidLottoNumberLength);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.invalidLottoNumberDuplicate);
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "a", 5, 6]);
    }).toThrow(ERROR_MESSAGES.invalidLottoNumberType);
  });

  test("로또 번호의 범위가 1부터 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 66]);
    }).toThrow(ERROR_MESSAGES.invalidLottoNumberRange);
  });

  test("로또 번호에 올바른 값이 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
