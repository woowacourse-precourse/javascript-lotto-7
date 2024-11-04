import { validateBonusNumber } from '../../src/validate/bonusNumberValidator.js';
import { BONUS_NUMBER_ERROR_MESSAGE } from '../../src/constants/errorMessage.js';

describe('보너스 번호 입력 검증', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test.each([
    ['빈 문자열', '', BONUS_NUMBER_ERROR_MESSAGE.NO_INPUT],
    ['공백 문자열', '   ', BONUS_NUMBER_ERROR_MESSAGE.NO_INPUT],
  ])('빈 값 입력 시 에러가 발생해야 한다 - %s', (_, input, expectedError) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(
      expectedError
    );
  });

  test.each([
    ['범위 미만', '0', BONUS_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE],
    ['범위 초과', '46', BONUS_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE],
  ])(
    '범위를 벗어난 숫자가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateBonusNumber(input, winningNumbers)).toThrow(
        expectedError
      );
    }
  );

  test.each([
    ['문자열', 'abc', BONUS_NUMBER_ERROR_MESSAGE.NOT_NUMBER],
    ['숫자+문자', '7번', BONUS_NUMBER_ERROR_MESSAGE.NOT_NUMBER],
  ])(
    '숫자가 아닌 입력 시 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateBonusNumber(input, winningNumbers)).toThrow(
        expectedError
      );
    }
  );

  test.each([['소수', '7.5', BONUS_NUMBER_ERROR_MESSAGE.IS_Integer]])(
    '정수가 아닌 숫자가 있을 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateBonusNumber(input, winningNumbers)).toThrow(
        expectedError
      );
    }
  );

  test.each([
    ['중복된 번호', '1', BONUS_NUMBER_ERROR_MESSAGE.DUPLICATE],
    ['다른 중복 번호', '6', BONUS_NUMBER_ERROR_MESSAGE.DUPLICATE],
  ])(
    '당첨 번호와 중복된 경우 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateBonusNumber(input, winningNumbers)).toThrow(
        expectedError
      );
    }
  );

  test.each([
    ['정상 케이스 1', '7'],
    ['정상 케이스 2', '45'],
  ])(
    '올바른 보너스 번호 입력 시 에러가 발생하지 않아야 한다 - %s',
    (_, input) => {
      expect(() => validateBonusNumber(input, winningNumbers)).not.toThrow();
    }
  );
});
