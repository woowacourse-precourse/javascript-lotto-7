import { checkDuplicate, checkNumber, checkWinNumbers } from "../../../src/feature/validate/checkWinNumber.js";

describe('숫자의 유효성 테스트', () => {
  test.each([
    [0, '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [46, '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [1.1, '[ERROR] 번호는 양의 정수여야 합니다.'],
    [NaN, '[ERROR] 입력 번호는 숫자여야 합니다.']
  ])('변환된 입력값 ( %d ) 에 대한 예외 처리 : %s', 
    (input, errorMessage) => {
      // given
      const parsedInput = input;

      // then
      expect(() => checkNumber(parsedInput)).toThrow(new Error(errorMessage));
    });

  test.each([
    [[0, 1, 2, 3, 4, 5], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [[1, 2, 3, 4, 5, 46], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [[1.1, 2.1, 3.3, 4.4, 5.5, 6.6], '[ERROR] 번호는 양의 정수여야 합니다.'],
    [[1, 2, 3, 4, 5, 44.999999999999], '[ERROR] 번호는 양의 정수여야 합니다.'],
    [[NaN, 1, 2, 3, 4, 5], '[ERROR] 입력 번호는 숫자여야 합니다.']
  ])('변환된 배열 %O 에 대한 예외 처리 : %s', 
    (input, errorMessage) => {
      // given
      const parsedInput = input;

      // then
      expect(() => checkWinNumbers(parsedInput)).toThrow(new Error(errorMessage));
  });

  test.each([
    [[1, 2, 2, 3, 4, 5]],
    [[1, 1, 2, 3, 4, 5]],
    [[45, 45, 45, 45, 45, 20]]
  ])('변환된 배열 %O 의 중복 존재에 대한 예외 처리', 
    (input) => {
      // given
      const userInput = input;
      const errorMessage = '[ERROR] 중복된 숫자가 존재합니다.';
      // then
      expect(() => checkDuplicate(userInput)).toThrow(new Error(errorMessage));
    })
})