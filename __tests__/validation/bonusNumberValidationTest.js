import CustomError from '../../src/utils/CustomError.js';
import bonusNumberValidation from '../../src/validations/bonusNumberValidation.js';

describe('보너스 번호 유효성 검사', () => {
  test.each([
    {
      input: { bonusNumber: 'a', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notNumber.errorMessage,
    },
    {
      input: { bonusNumber: '10, 11', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notNumber.errorMessage,
    },
    {
      input: { bonusNumber: '10 11', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notNumber.errorMessage,
    },
    {
      input: { bonusNumber: '10.5', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notInteger.errorMessage,
    },
    {
      input: { bonusNumber: '0', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notInRange.errorMessage,
    },
    {
      input: { bonusNumber: '46', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notInRange.errorMessage,
    },
    {
      input: { bonusNumber: '1', winningNumbers: [1, 2, 3, 4, 5, 6] },
      expected: bonusNumberValidation.RULE_SET.notUnique.errorMessage,
    },
  ])(
    '보너스 번호: $input.bonusNumber, 당첨 번호: $input.winningNumbers 일 때 "$expected" CustomError를 반환한다.',
    ({ input, expected }) => {
      expect(() =>
        bonusNumberValidation.validate(input.bonusNumber, input.winningNumbers)
      ).toThrow(new CustomError(expected));
    }
  );

  test('유효한 보너스 번호를 입력하면 CustomError를 반환하지 않는다.', () => {
    expect(() =>
      bonusNumberValidation.validate('7', [1, 2, 3, 4, 5, 6])
    ).not.toThrow(CustomError);
  });
});
