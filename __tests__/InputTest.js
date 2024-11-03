import Input from "../src/Input.js";

describe("로또 구입 금액에 대한 입력 테스트", () => {
  test("로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("abc");
    }).toThrow("[ERROR] ");
  });

  test("로또 구입 금액이 음수일 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("-1000");
    }).toThrow("[ERROR] ");
  });

  test("로또 구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("11100");
    }).toThrow("[ERROR] ");
  });

  test("올바른 로또 구입 금액이 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      Input.validateMoney("5000");
    }).not.toThrow();
  });
});

describe("당첨번호에 대한 입력 테스트", () => {
  test("당첨번호가 쉼표(,)로 구분되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1 2 3 4 5 6");
    }).toThrow("[ERROR] ");
  });

  test("당첨번호에 문자가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1,2,3,4,abc,dfg");
    }).toThrow("[ERROR] ");
  });

  test("당첨번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1,2,3,4,500,6");
    }).toThrow("[ERROR] ");
  });

  test("당첨번호가 6개 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1,2,3");
    }).toThrow();
  });
});

describe("보너스 번호에 대한 입력 테스트", () => {
  test("보너스 번호에 문자가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1,3,5,7,9", "a");
    }).toThrow("[ERROR] ");
  });

  test("보너스 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("100");
    }).toThrow("[ERROR] ");
  });

  test("보너스 번호가 당첨번호의 숫자 중 같은 숫자가 있다면 예외가 발생한다.", () => {
    expect(() => {
      Input.validateJackpotNumber("1,3,5,7,9", "9");
    }).toThrow();
  });
});