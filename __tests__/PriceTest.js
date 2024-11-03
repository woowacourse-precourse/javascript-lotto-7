import Price from "../src/Price.js";
import { PRICE_ERROR } from "../src/Message/Message.js";

describe("가격 클래스 테스트", () => {
  test("입력받은 가격이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Price("price1000");
    }).toThrow(PRICE_ERROR.IS_NOT_NUMBER);
  });

  test("입력받은 가격이 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Price(1000.123);
    }).toThrow(PRICE_ERROR.IS_NOT_INTEGER);
  });

  test("입력받은 가격이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Price(-1000);
    }).toThrow(PRICE_ERROR.IS_NOT_POSITIVE);
  });

  test("입력받은 가격의 단위가 1000이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Price(1100);
    }).toThrow(PRICE_ERROR.IS_NOT_THOUSAND);
  });
});
