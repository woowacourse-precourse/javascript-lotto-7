import { Price } from "../src/lotto/index.js";
import { LOTTO_MESSAGES } from "../src/constants/index.js";

describe("Price 클래스 테스트", () => {
  const { INVALID_PRICE, INVALID_MAX_PRICE } = LOTTO_MESSAGES;
  test.each([
    { price: 1100, errorMessage: INVALID_PRICE, description: "1000원 단위가 아닌 경우" },
    { price: 0, errorMessage: INVALID_PRICE, description: "1000원 단위가 아닌 경우(0원)" },
    { price: 110000, errorMessage: INVALID_MAX_PRICE, description: "10만원을 넘는 경우 에러 발생" },
  ])("new Price(price)를 실행하면 에러 메세지와 함께 에러가 발생한다.", ({ price, errorMessage }) => {
    expect(() => new Price(price)).toThrow(errorMessage);
  });
});
