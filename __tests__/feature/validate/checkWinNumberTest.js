import { checkNumber } from "../../../src/feature/validate/checkWinNumber.js";

describe('숫자의 유효성 테스트', () => {
  test.each([
    [0, '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [46, '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [1.1, '[ERROR] 번호는 양의 정수여야 합니다.'],
    [NaN, '[ERROR] 입력 번호는 숫자여야 합니다.']
  ])('변환된 입력값 ( %d ) 에 대한 예외처리 : %s', 
    (input, errorMessage) => {
      // given
      const parsedInput = input;

      // then
      expect(() => checkNumber(parsedInput)).toThrow(new Error(errorMessage));
    });
})