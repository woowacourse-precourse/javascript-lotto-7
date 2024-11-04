import Purchase from "../src/Purchase.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe("로또 구입금액 테스트", () => {
  test("입력금액을 통해 구매수량 구하기", () => {
    const purchase = new Purchase("10000");
    const amount = purchase.getQuantity();
    expect(amount).toBe(10);
  });

  test("0이하의 숫자를 입력할 경우", () => {
    expect(() => {
      new Purchase("-1");
    }).toThrow(ERROR_MESSAGE.non_positive_money);
  });

  test("숫자가 아닌 경우", () => {
    expect(() => {
      new Purchase("1000j");
    }).toThrow("[ERROR]");
  });

  test("공백을 입력한 경우", () => {
    expect(() => {
      new Purchase(" ");
    }).toThrow("[ERROR]");
  });

  test("1000으로 나누어 떨어지지 않을 경우", () => {
    expect(() => {
      new Purchase("30");
    }).toThrow("[ERROR]");
  });
});
