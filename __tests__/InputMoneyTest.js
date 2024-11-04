import { validateInputMoney } from "../src/validator/InputMoney";

describe("입력 금액 테스트", () => {
  const inputMoney = ["1000a", "10ㅇㅇ", "100@"];
  const notPositiveNum = [0, -3000];
  const notMoneyUnit = [1100, 200, 10, 5];

  test.each(inputMoney)(
    "입력 금액에 문자가 포함되어 있으면 예외가 발생한다.",
    (money) => {
      expect(() => {
        validateInputMoney(money);
      }).toThrow("[ERROR]");
    }
  );

  test.each(notPositiveNum)(
    "입력 금액은 0 이하 값이면 예외가 발생한다.",
    (money) => {
      expect(() => {
        validateInputMoney(money);
      }).toThrow("[ERROR]");
    }
  );

  test.each(notMoneyUnit)(
    "입력 금액은 1000원 단위가 아니면 예외가 발생한다.",
    (money) => {
      expect(() => {
        validateInputMoney(money);
      }).toThrow("[ERROR]");
    }
  );
});
