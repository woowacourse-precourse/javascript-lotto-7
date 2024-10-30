import checkPurchase from "../../../src/feature/validate/checkPurchase";

describe('구입 금액 예외 처리', () => {
  test.each([
    [NaN, '[ERROR] 입력하신 값이 숫자가 아닙니다.'],
    [999, '[ERROR] 구매액이 너무 작습니다.'],
    [1001, '[ERROR] 구매액은 1,000원으로 나누어 떨어져야 합니다.']
  ])('{ input : %s, Error : %s }', (input, errorMessage) => {
    //given
    const userInput = input;

    // then
    expect(() => checkPurchase(userInput)).toThrow(new Error(errorMessage));
  }

  )
})