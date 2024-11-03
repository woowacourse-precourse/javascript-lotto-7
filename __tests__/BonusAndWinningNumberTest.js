import ERROR_MESSAGES from '../src/constants/errorMessages.js';
import BonusNumberValidator from '../src/validators/BonusNumberValidator.js';
import WinningNumberValidator from '../src/validators/WinningNumberValidator.js';

describe('당첨 번호 입력 유효성 검사 테스트', () => {
  const testCases = [
    {
      description: '1부터 45 사이의 숫자 6개를 쉼표(,)로 구분하여 입력할 경우 통과한다.',
      input: [1, 2, 3, 4, 5, 6],
      expectedError: undefined,
    },
    {
      description: '중복되지 않는 당첨 번호를 입력할 경우 통과한다.',
      input: [1, 2, 3, 4, 5, 6],
      expectedError: undefined,
    },
    {
      description: '6개의 숫자가 아닌 경우 예외가 발생한다.',
      input: [1, 2, 3, 4, 5],
      expectedError: ERROR_MESSAGES.invalid_number_count('당첨 번호', 6),
    },
    {
      description: '당첨 번호에 중복된 숫자가 포함된 경우 예외가 발생한다.',
      input: [1, 1, 2, 3, 4, 5],
      expectedError: ERROR_MESSAGES.invalid_duplicate_number('당첨 번호'),
    },
    {
      description: '1부터 45를 벗어난 숫자가 포함된 경우 예외가 발생한다.',
      input: [1, 2, 3, 4, 5, 46],
      expectedError: ERROR_MESSAGES.invalid_number_range('당첨 번호', 1, 45),
    },
  ];

  test.each(testCases)('$description', ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => WinningNumberValidator.validate(input)).toThrow(expectedError);
    } else {
      expect(() => WinningNumberValidator.validate(input)).not.toThrow();
    }
  });
});

describe('보너스 번호 입력 유효성 검사 테스트', () => {
  test('1부터 45를 벗어난 숫자가 포함된 경우 예외가 발생한다.', () => {
    expect(() => BonusNumberValidator.validate(46)).toThrow(
      ERROR_MESSAGES.invalid_number_range('보너스 번호', 1, 45),
    );
  });

  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.', () => {
    expect(() => BonusNumberValidator.validate(6, [1, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGES.invalid_bonus_duplicate,
    );
  });
});
