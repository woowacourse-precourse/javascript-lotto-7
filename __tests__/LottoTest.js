import Lotto from "../src/Lotto";
import { ERROR_MESSAGE_VALIDATE_LOTTO } from "../src/ErrorMessage.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test("로또 번호에 유효하지 않은 값이 들어가면 예외가 발생한다.", () => {
    expect(() => {
      const p2 = new Lotto([0, 18, 21, 22, 34, 44]);
    }).toThrow(ERROR_MESSAGE_VALIDATE_LOTTO.outOfBound);
    expect(() => {
      const p2 = new Lotto([1, 18, 2.1, 22, 34, 44]);
    }).toThrow(ERROR_MESSAGE_VALIDATE_LOTTO.nonInteger);
    expect(() => {
      const p2 = new Lotto([3, 18, 21, 22, "갸", 44]);
    }).toThrow(ERROR_MESSAGE_VALIDATE_LOTTO.nan);
  });
});
