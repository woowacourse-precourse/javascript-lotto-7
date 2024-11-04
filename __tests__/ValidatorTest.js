import Validator from "../src/Model/Validator.js";

describe("Validator 클래스 테스트", () => {
  // 구입 금액
  test("구입 금액이 빈 값일 경우 예외가 발생한다.", () => {
    const TEST_VALUE = [""];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.budgetValidate(value)).toThrow("[ERROR]");
    });
  });

  test("구입 금액에 숫자가 아닌 값이 포함되었을 경우 예외가 발생한다.", () => {
    const TEST_VALUE = ["jj", "1000 1000", "1000,1000"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.budgetValidate(value)).toThrow("[ERROR]");
    });
  });

  test("구입 금액이 0 또는 음수일 경우 예외가 발생한다.", () => {
    const TEST_VALUE = ["0", "-1000"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.budgetValidate(value)).toThrow("[ERROR]");
    });
  });

  test("구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    const TEST_VALUE = ["100"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.budgetValidate(value)).toThrow("[ERROR]");
    });
  });

  test("올바른 구입 금액 입력은 숫자형으로 반환된다.", () => {
    const TEST_VALUE = ["3000"];
    TEST_VALUE.forEach(value => {
      expect(Validator.budgetValidate(TEST_VALUE)).toBe(3000);
    });
  });

  // 당첨 번호
  test("당첨 번호가 쉼표로 구분되지 않으면 예외가 발생한다.", () => {
    const TEST_VALUE = ["1.2.3.4.5.6", "1 2 3 4 5 6", "1,2,3,4,5:6"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.winningValidate(value)).toThrow("[ERROR]");
    });
  });

  test("당첨 번호가 빈 값이거나 쉼표 사이에 숫자가 들어있지 않을 경우 예외가 발생한다.", () => {
    const TEST_VALUE = ["", "1,2,,3,4,5"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.winningValidate(value)).toThrow("[ERROR]");
    });
  });

  test("당첨 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다.", () => {
    const TEST_VALUE = ["1, 2, three, 4, 5, 6"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.winningValidate(value)).toThrow("[ERROR]");
    });
  });

  test("당첨 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다.", () => {
    const TEST_VALUE = ["1, 2, three, 4, 5, 6"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.winningValidate(value)).toThrow("[ERROR]");
    });
  });

  // 보너스 번호
  const WINNIG_NUMBERS = [1, 2, 3, 4, 5, 6];
  test("보너스 번호가 빈 값일 경우 예외가 발생한다.", () => {
    const TEST_VALUE = [""];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.bonusValidate(value, WINNIG_NUMBERS)).toThrow("[ERROR]");
    });
  });

  test("보너스 번호가 숫자가 아닌 값일 경우 예외가 발생한다.", () => {
    const TEST_VALUE = ["j"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.bonusValidate(value, WINNIG_NUMBERS)).toThrow("[ERROR]");
    });
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const TEST_VALUE = ["0", "46"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.bonusValidate(value, WINNIG_NUMBERS)).toThrow("[ERROR]");
    });
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    const TEST_VALUE = ["1"];
    TEST_VALUE.forEach(value => {
      expect(() => Validator.bonusValidate(value, WINNIG_NUMBERS)).toThrow("[ERROR]");
    });
  });
});