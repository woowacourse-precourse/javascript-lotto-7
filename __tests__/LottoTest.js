import Lotto from "../src/Lotto";
import { validateBudget, validateWinnum, validateBonusnum } from "../src/Validation.js";

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
  test("구입 금액이 0 이하인 경우", () => {
    expect(() => {
      validateBudget(0);
    }).toThrow("[ERROR] 금액은 0 이상이어야 합니다.");

    expect(() => {
      validateBudget(-1000);
    }).toThrow("[ERROR] 금액은 0 이상이어야 합니다.");
  });

  test("구입 금액이 로또 가격의 배수가 아닌 경우", () => {
    expect(() => {
      validateBudget(1500);
    }).toThrow("[ERROR] 로또 금액과 나누어 떨어지지 않습니다.");
  });

  test("당첨 번호에 숫자가 아닌 값이 포함된 경우", () => {
    expect(() => {
      validateWinnum([1, 2, "a", 4, 5, 6]);
    }).toThrow("[ERROR] 당첨번호는 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복된 경우", () => {
    expect(() => {
      validateBonusnum(5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스번호는 당첨번호와 중복될 수 없습니다.");
  });

  test("보너스 번호가 1~45 범위를 벗어난 경우", () => {
    expect(() => {
      validateBonusnum(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스번호는 1 ~ 45 범위 안에 있어야 합니다.");

    expect(() => {
      validateBonusnum(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스번호는 1 ~ 45 범위 안에 있어야 합니다.");
  });

  test("로또 번호 입력 시 중복된 번호가 있을 경우", () => {
    expect(() => {
      validateWinnum([1, 2, 3, 4, 4, 5]);
    }).toThrow("[ERROR] 당첨번호는 중복될 수 없습니다.");
  });

  test("구입 금액이 정상적으로 입력된 경우", () => {
    expect(() => {
      validateBudget(1000);
    }).not.toThrow();

    expect(() => {
      validateBudget(5000);
    }).not.toThrow();
  });

  test("보너스 번호가 정상적으로 입력된 경우", () => {
    expect(() => {
      validateBonusnum(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("로또 번호가 중복되지 않고 올바르게 입력된 경우", () => {
    expect(() => {
      validateWinnum([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});