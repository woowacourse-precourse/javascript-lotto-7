import Lotto from "../src/Model/Lotto.js";
import Validator from "../src/utils/Validator.js";

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

  test("로또 번호에 보너스 값이 들어있으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      Validator.containsBonusNumber(lotto.getNumbers(),7);
    }).toThrow("[ERROR]");
  });

  test("입력한 로또 번호가 1~45 사이의 값이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([70, 2, 3, 4, 5, 7]);
    }).toThrow("[ERROR]");
  });
});
