import validateWinningNumbers from '../src/validations/winning-numbers.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

const { INVALID_FORMAT, INVALID_LOTTO_NUMBER, INVALID_DUPLICATE_NUMBERS } =
  ERROR_MESSAGES;

describe('당첨 번호 입력 테스트', () => {
  test.each([
    [
      '올바른 형식의 당첨 번호를 입력할 때 정상적으로 처리되는지 확인',
      '1,2,3,4,5,6',
      [1, 2, 3, 4, 5, 6],
    ],
  ])('%s', (_, input, expected) => {
    const result = validateWinningNumbers(input);
    expect(result).toEqual(expected);
  });

  test.each([
    [
      '숫자 형식이 아닌 경우 에러 메시지가 발생하는지 확인',
      '1,2,a,4,5,6',
      INVALID_FORMAT,
    ],
    [
      '구분자가 , 가 아닌 경우 에러 메시지가 발생하는지 확인',
      '1/2/3/4/5/6',
      INVALID_FORMAT,
    ],
    [
      '6개의 숫자가 아닌 경우 에러 메시지가 발생하는지 확인',
      '1,2,3,4,5',
      INVALID_FORMAT,
    ],
    [
      '중복된 번호가 있는 경우 에러 메시지가 발생하는지 확인',
      '1,2,3,4,5,5',
      INVALID_DUPLICATE_NUMBERS,
    ],
    [
      '범위를 벗어난 번호가 있는 경우 에러 메시지가 발생하는지 확인 (0 포함)',
      '0,2,3,4,5,6',
      INVALID_LOTTO_NUMBER,
    ],
    [
      '범위를 벗어난 번호가 있는 경우 에러 메시지가 발생하는지 확인 (46 포함)',
      '1,2,3,4,5,46',
      INVALID_LOTTO_NUMBER,
    ],
  ])('%s', (_, input, expectedError) => {
    expect(() => validateWinningNumbers(input)).toThrow(expectedError);
  });
});
