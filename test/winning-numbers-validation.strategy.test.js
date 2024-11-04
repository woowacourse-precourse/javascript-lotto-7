import WinningNumbersValidationStrategy from '../src/validation/winning-numbers-validation.strategy.js';

/**
 *
 * @param {string} winningNumbers
 * @returns {Array<number>}
 */
function parseWinningNumbers(winningNumbers) {
  return winningNumbers.split(',').map(Number);
}

/**
 *
 * @param {number} winningNumbers
 * @returns {WinningNumbersValidationStrategy}
 */
function generateWinningNumbersValidationStrategy(winningNumbers) {
  return new WinningNumbersValidationStrategy(winningNumbers, parseWinningNumbers);
}

describe('WinningNumbersValidationStrategy', () => {
  describe('validate', () => {
    it.each([
      {
        description: '당첨 번호로 빈 값이 입력된 경우 에러를 발생시켜야 한다',
        input: '',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_CAN_NOT_BE_EMPTY,
      },
      {
        description: '당첨 번호로 0이 입력된 경우 에러를 발생시켜야 한다',
        input: '0',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: '당첨 번호로 실수가 입력된 경우 에러를 발생시켜야 한다',
        input: '0.125',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: '당첨 번호로 음수가 입력된 경우 에러를 발생시켜야 한다',
        input: '-1',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_MUST_BE_POSITIVE_INTEGER,
      },
      {
        description: `당첨 번호가 ${WinningNumbersValidationStrategy.STRATEGY.WINNING_NUMBERS_RANGE.START} ~ ${WinningNumbersValidationStrategy.STRATEGY.WINNING_NUMBERS_RANGE.END} 에 존재하지 않는 경우 에러를 발생시켜야 한다`,
        input: '46',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_RANGE_IS_NOT_VALID,
      },
      {
        description: `당첨 번호의 길이가 ${WinningNumbersValidationStrategy.STRATEGY.WINNING_NUMBERS_LENGTH}가 아닌 경우 에러를 발생시켜야 한다`,
        input: '1,2,3,4,5',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_LENGTH_IS_NOT_VALID,
      },
      {
        description: '당첨 번호에 중복된 숫자가 있는 경우 에러를 발생시켜야 한다',
        input: '1,1,2,3,4,5',
        expectedError:
          WinningNumbersValidationStrategy.ERROR_MESSAGE.WINNING_NUMBERS_HAVE_NO_DUPLICATED_NUMBER,
      },
    ])('$description', ({ input, expectedError }) => {
      const winningNumbersValidationStrategy = generateWinningNumbersValidationStrategy(input);

      expect(() => winningNumbersValidationStrategy.validate()).toThrow(expectedError);
    });
  });
});
