import PurchaseMoney from "../src/PurchaseMoney.js";
import { ERROR_MESSAGE } from "../src/constants/errorMessage";

describe("구매자 클래스 테스트", () => {
  test("구매 금액이 빈 문자열로 입력시 예외발생", () => {
    expect(() => {
      new PurchaseMoney(0);
    }).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });
  test("구매 금액이 숫자가 아닌 값으로 입력시 예외발생", () => {
    expect(() => {
      new PurchaseMoney("abc");
    }).toThrow(ERROR_MESSAGE.PURCHASE_INVALID);
  });
  test("구매 금액이 양수가 아닌 값으로 입력시 예외발생", () => {
    expect(() => {
      new PurchaseMoney("-100");
    }).toThrow(ERROR_MESSAGE.PURCHASE_POSITIVE);
  });
  test("구매 금액이 1000원 단위가 아닌 값으로 입력시 예외발생", () => {
    expect(() => {
      new PurchaseMoney("1500");
    }).toThrow(ERROR_MESSAGE.PURCHASE_MULTIPLE_OF_THOUSAND);
  });
});
