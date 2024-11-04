import { WinningNumberValidation } from '../../../src/shared/validation/index.js';
import { ERROR_MESSAGE } from '../../../src/shared/constants/error.js';

describe('WinningNumberValidation 테스트', () => {
  test.each([
    {
      name: '빈 문자열 입력 시 에러 발생',
      input: { command: '' },
      expectedError: ERROR_MESSAGE.INVALID_WINNING_NUMBERS,
    },
    {
      name: '공백 문자열 입력 시 에러 발생',
      input: { command: '   ' },
      expectedError: ERROR_MESSAGE.INVALID_WINNING_NUMBERS,
    },
    {
      name: 'undefined 입력 시 에러 발생',
      input: { command: undefined },
      expectedError: ERROR_MESSAGE.INVALID_WINNING_NUMBERS,
    },
    {
      name: '숫자가 아닌 값 포함 시 에러 발생',
      input: { command: '1,2,3,a,5,6' },
      expectedError: ERROR_MESSAGE.INVALID_WINNING_NUMBERS,
    },
    {
      name: '소수점 포함 시 에러 발생',
      input: { command: '1,2,3,4.5,5,6' },
      expectedError: ERROR_MESSAGE.INVALID_WINNING_NUMBERS,
    },
    {
      name: '6개 미만 숫자 입력 시 에러 발생',
      input: { command: '1,2,3,4,5' },
      expectedError: ERROR_MESSAGE.INVALID_LENGTH,
    },
    {
      name: '6개 초과 숫자 입력 시 에러 발생',
      input: { command: '1,2,3,4,5,6,7' },
      expectedError: ERROR_MESSAGE.INVALID_LENGTH,
    },
    {
      name: '중복된 숫자 입력 시 에러 발생',
      input: { command: '1,1,2,3,4,5' },
      expectedError: ERROR_MESSAGE.INVALID_DUPLICATE,
    },
    {
      name: '범위 미만 숫자 입력 시 에러 발생',
      input: { command: '0,1,2,3,4,5' },
      expectedError: ERROR_MESSAGE.INVALID_RANGE,
    },
    {
      name: '범위 초과 숫자 입력 시 에러 발생',
      input: { command: '1,2,3,4,5,46' },
      expectedError: ERROR_MESSAGE.INVALID_RANGE,
    },
  ])('$name', ({ input, expectedError }) => {
    expect(() => {
      WinningNumberValidation(input);
    }).toThrow(expectedError);
  });

  test.each([
    {
      name: '최소 범위 유효한 숫자들',
      input: { command: '1,2,3,4,5,6' },
      expected: [1, 2, 3, 4, 5, 6],
    },
    {
      name: '최대 범위 유효한 숫자들',
      input: { command: '40,41,42,43,44,45' },
      expected: [40, 41, 42, 43, 44, 45],
    },
    {
      name: '공백이 포함된 유효한 숫자들',
      input: { command: ' 1, 2, 3, 4, 5, 6 ' },
      expected: [1, 2, 3, 4, 5, 6],
    },
    {
      name: '무작위 순서의 유효한 숫자들',
      input: { command: '6,1,3,2,5,4' },
      expected: [6, 1, 3, 2, 5, 4],
    },
  ])('$name 입력이 성공한다', ({ input, expected }) => {
    const result = WinningNumberValidation(input);
    expect(result).toEqual(expected);
    expect(result).toHaveLength(6);
  });

  test('반환된 배열이 원본 입력값을 변경하지 않는다', () => {
    const input = { command: '1,2,3,4,5,6' };
    const result = WinningNumberValidation(input);

    expect(input.command).toBe('1,2,3,4,5,6');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
