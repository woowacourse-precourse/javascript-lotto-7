import BudgetManager from "../src/BudgetManger";

describe("BudgetManager 클래스 테스트", () => {
  test("입력 금액이 로또 가격으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new BudgetManager(5200, 1000);
    }).toThrow("[ERROR]");
  });

  test("입력 금액이 로또 가격보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new BudgetManager(200, 1000);
    }).toThrow("[ERROR]");
  });
});
