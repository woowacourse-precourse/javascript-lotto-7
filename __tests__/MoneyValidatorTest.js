import MoneyValidator from "../src/MoneyValidator.js";

describe("moneyValidator 클래스 테스트", () => {
  test("구매 금액이 1000 단위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator(13987);
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("dd");
    }).toThrow("[ERROR]");
  });

  test("추가 당첨 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("dd");
    }).toThrow("[ERROR]");
  });
});
