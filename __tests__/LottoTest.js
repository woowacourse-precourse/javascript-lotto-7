import Lotto from "../src/Lotto";

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
  //추가 기능에 따른 테스트 코드 작성
  test("로또 번호에 1부터 45 사이의 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 소수가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.validateBonusNumber(0);
    }).toThrow("[ERROR]");
    expect(() => {
      Lotto.validateBonusNumber(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 소수이면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.validateBonusNumber(1.5);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.validatePurchaseAmount(1500);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.validatePurchaseAmount("abc");
    }).toThrow("[ERROR]");
  });
});
