import validateWinningNumbers from "../src/validate/validateWinningNumbers";
import validateNumber from "../src/validate/validateNumber";
import validateBonusNumber from "../src/validate/validateBonusNumber";

describe("당첨번호 검증 테스트", () => {
  test("숫자가 6개가 아닐 때 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 6개의 숫자를 입력해 주세요.");
  });

  test("중복된 숫자가 있을 때 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복되지 않은 숫자를 입력해 주세요.");
  });

  test("숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber("a");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("1~45 사이의 숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber(46);
    }).toThrow("[ERROR] 1~45 사이의 숫자를 입력해 주세요.");
  });

  test("정수가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber(1.5);
    }).toThrow("[ERROR] 정수를 입력해 주세요.");
  });
  test("올바른 숫자가 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      validateNumber(1);
    }).not.toThrow();
  });
});

describe("보너스번호 검증 테스트", () => {
  test("보너스 번호가 입력되지 않았을 때 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber("", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 공백이 있을때.", () => {
    expect(() => {
      validateBonusNumber("1 2", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 쉼표가 있을 때 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber("1,2", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복될 때 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("올바른 보너스 번호가 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
