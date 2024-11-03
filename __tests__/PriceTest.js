import Price from "../src/Price.js";
import ERROR_MESSAGES from "../src/util/messages/error-message.js";

describe("Price 클래스 테스트", () => {
  test("로또 가격 생성 테스트", () => {
    // given
    const inputPrice = 14000;

    // when
    const price = new Price(inputPrice);

    // then
    expect(price.lottoCount).toBe(14);
  });

  test.each([
    { input: "", errorMessage: ERROR_MESSAGES.PRICE.EMPTY },
    { input: "abc", errorMessage: ERROR_MESSAGES.PRICE.NOT_NUMBER },
    { input: 100, errorMessage: ERROR_MESSAGES.PRICE.NOT_ENOUGH },
    { input: 14001, errorMessage: ERROR_MESSAGES.PRICE.WRONG },
  ])("예외 테스트: %o", ({ input, errorMessage }) => {
    expect(() => {
      new Price(input);
    }).toThrow(errorMessage);
  });
});
