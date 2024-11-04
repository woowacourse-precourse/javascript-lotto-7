import { validateWinningNumber } from '../../src/validate/winningNumberValidator.js';
import { WINNING_NUMBER_ERROR_MESSAGE } from '../../src/constants/errorMessage.js';

describe('당첨 번호 유효성 검증', () => {
  test.each([['빈 배열', [], WINNING_NUMBER_ERROR_MESSAGE.NO_INPUT]])(
    '빈 값 입력 시 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    }
  );

  test.each([
    [
      '범위 미만',
      [0, 2, 3, 4, 5, 6],
      WINNING_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE,
    ],
    [
      '범위 초과',
      [1, 2, 3, 4, 5, 46],
      WINNING_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE,
    ],
  ])(
    '범위를 벗어난 숫자가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    }
  );

  test.each([
    [
      '문자 포함',
      [1, 2, '3', 4, 5, 6],
      WINNING_NUMBER_ERROR_MESSAGE.NOT_NUMBER,
    ],
    ['NaN 포함', [1, 2, NaN, 4, 5, 6], WINNING_NUMBER_ERROR_MESSAGE.NOT_NUMBER],
  ])(
    '숫자가 아닌 요소가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['중복 숫자', [1, 2, 2, 4, 5, 6], WINNING_NUMBER_ERROR_MESSAGE.DUPLICATE],
    ['여러 중복', [1, 1, 1, 4, 5, 6], WINNING_NUMBER_ERROR_MESSAGE.DUPLICATE],
  ])(
    '중복된 숫자가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['5개 숫자', [1, 2, 3, 4, 5], WINNING_NUMBER_ERROR_MESSAGE.INVALID_LENGTH],
    [
      '7개 숫자',
      [1, 2, 3, 4, 5, 6, 7],
      WINNING_NUMBER_ERROR_MESSAGE.INVALID_LENGTH,
    ],
  ])('6개가 아닌 경우 에러가 발생해야 한다 - %s', (_, input, expectedError) => {
    expect(() => validateWinningNumber(input)).toThrow(expectedError);
  });

  test.each([
    [
      '소수 포함',
      [1, 2, 3.5, 4, 5, 6],
      WINNING_NUMBER_ERROR_MESSAGE.IS_Integer,
    ],
    [
      '여러 소수',
      [1.1, 2.2, 3.3, 4, 5, 6],
      WINNING_NUMBER_ERROR_MESSAGE.IS_Integer,
    ],
  ])(
    '정수가 아닌 숫자가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateWinningNumber(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['정상 케이스 1', [1, 2, 3, 4, 5, 6]],
    ['정상 케이스 2', [40, 41, 42, 43, 44, 45]],
  ])(
    '올바른 당첨 번호 입력 시 에러가 발생하지 않아야 한다 - %s',
    (_, input) => {
      expect(() => validateWinningNumber(input)).not.toThrow();
    }
  );
});
