import checkDecimal from "../../../src/feature/validate/checkDecimal";

describe('긴 소수점 입력에 대한 테스트', () => {
  test.each([
    ['1.000000000001, 2, 3, 4, 5, 6'],
    ['1.0, 2.1, 3.0, 4.00, 5.99, 6.0000000001'],
    ['1.000000000000000009, 2.000000000000000, 3.9999999999999, 4.000098182, 5.88837373, 6.999999999' ],
    ['1, 2, 3, 4, 5, 44.999999999999999'],
    ['1, 2, 3, 4, 5, 44.9'],
  ])('유저의 입력 값에 소수점이 존재할 경우 예외처리', (input) => {
    // given
    const userInput = input;

    // then
    expect(() => checkDecimal(userInput)).toThrow(new Error('[ERROR] 입력값에 소수가 존재 합니다.'));
  })
});