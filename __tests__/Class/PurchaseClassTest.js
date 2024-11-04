import Purchase from "../../src/Class/Purchase";

describe('Class: Purchase 테스트', () => {
  test.each([
    ['1000',1000],
    ['2000000',2000000],
    ['9999000',9999000]
  ])('유효한 입력 값에 대한 필드값 생성 { 입력값 : %s, 필드값 : %d }', (input, field) => {
    // given
    const userInput = input;

    // when
    const purchase = new Purchase(userInput);

    // then
    expect(purchase.purchase).toBe(field);
  });

  test.each([
    ['1000;', '[ERROR] 입력하신 값이 숫자가 아닙니다.'],
    ['999', '[ERROR] 구매액이 너무 작습니다.'],
    ['1001', '[ERROR] 구매액은 1,000원으로 나누어 떨어져야 합니다.']
  ])('유효하지 않은 입력 값에 대한 에러 발생 { 입력값 : %s, Error: %s }',
    (input, errorMessage) => {
      // given
      const userInput = input;

      // then
      expect(() => new Purchase(userInput)).toThrow(errorMessage);
    }
  );
})