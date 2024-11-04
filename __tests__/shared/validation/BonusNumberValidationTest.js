import { BonusNumberValidation } from '../../../src/shared/validation/BonusNumberValidation.js';
import { ERROR_MESSAGE } from '../../../src/shared/constants/constants.js';
describe('BonusNumberValidation 테스트', () => {
  const VALID_WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];

  test.each([
    {
      name: '빈 문자열 입력 시 에러 발생',
      input: { command: '', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_BONUS,
    },
    {
      name: '공백 문자열 입력 시 에러 발생',
      input: { command: '   ', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_BONUS,
    },
    {
      name: '문자열 입력 시 에러 발생',
      input: { command: 'abc', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_BONUS,
    },
    {
      name: '소수점 입력 시 에러 발생',
      input: { command: '1.5', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_BONUS,
    },
    {
      name: '범위 미만 숫자 입력 시 에러 발생',
      input: { command: '0', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_RANGE,
    },
    {
      name: '범위 초과 숫자 입력 시 에러 발생',
      input: { command: '46', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_RANGE,
    },
    {
      name: '당첨 번호와 중복된 숫자 입력 시 에러 발생',
      input: { command: '1', winningNumber: VALID_WINNING_NUMBERS },
      expectedError: ERROR_MESSAGE.INVALID_DUPLICATE,
    },
  ])('$name', ({ input, expectedError }) => {
    expect(() => {
      BonusNumberValidation(input);
    }).toThrow(expectedError);
  });

  test.each([
    {
      name: '최소 범위 유효한 숫자',
      input: { command: '7', winningNumber: VALID_WINNING_NUMBERS },
      expected: 7,
    },
    {
      name: '중간 범위 유효한 숫자',
      input: { command: '25', winningNumber: VALID_WINNING_NUMBERS },
      expected: 25,
    },
    {
      name: '최대 범위 유효한 숫자',
      input: { command: '45', winningNumber: VALID_WINNING_NUMBERS },
      expected: 45,
    },
    {
      name: '공백이 포함된 유효한 숫자',
      input: { command: ' 15 ', winningNumber: VALID_WINNING_NUMBERS },
      expected: 15,
    },
  ])('$name 입력이 성공한다', ({ input, expected }) => {
    const result = BonusNumberValidation(input);
    expect(result).toBe(expected);
  });
});
