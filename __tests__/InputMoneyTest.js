import { validateInputMoney } from "../src/validator/InputMoney";

describe("입력 금액 테스트", () => {
  const inputMoney = ["1000a", "10ㅇㅇ", "100@"];
  test.each(inputMoney)(
    "입력 금액에 문자가 포함되어 있으면 예외가 발생한다.",
    (money) => {
      expect(() => {
        validateInputMoney(money);
      }).toThrow("[ERROR]");
    }
  );
});
