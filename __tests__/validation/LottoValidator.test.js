import LottoValidator from '../../src/validation/LottoValidator.js';
import { ERROR_MESSAGES } from '../../src/utils/constants.js';

describe('LottoValidator 클래스 테스트', () => {
  test('당첨 번호가 6개 미만이면 예외가 발생한다.', () => {
    // given
    const invalidNumbers = '1, 2, 3, 4, 5';

    // when...then
    expect(() => {
      LottoValidator.validateWinningNumber(invalidNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    // given
    const invalidNumbers = '1, 2, 3, a, 5, 6';

    // when...then
    expect(() => {
      LottoValidator.validateWinningNumber(invalidNumbers);
    }).toThrow(ERROR_MESSAGES.NON_NUMERIC_VALUE);
  });

  test('당첨 번호가 유효 범위를 벗어나면 예외가 발생한다.', () => {
    // given
    const invalidNumbers = '1, 2, 3, 4, 5, 46';

    // when...then
    expect(() => {
      LottoValidator.validateWinningNumber(invalidNumbers);
    }).toThrow(ERROR_MESSAGES.LOTTO_RANGE);
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidNumber = 'a';

    // when...then
    expect(() => {
      LottoValidator.validateBonusNumber(winningNumbers, invalidNumber);
    }).toThrow(ERROR_MESSAGES.NON_NUMERIC_VALUE);
  });

  test('보너스 번호가 유효 범위를 벗어나면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidNumber = '50';

    // when...then
    expect(() => {
      LottoValidator.validateBonusNumber(winningNumbers, invalidNumber);
    }).toThrow(ERROR_MESSAGES.LOTTO_RANGE);
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '6';

    // when...then
    expect(() => {
      LottoValidator.validateBonusNumber(winningNumbers, bonusNumber);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  });

  test('유효한 당첨 번호 배열을 반환한다.', () => {
    // given
    const validNumbers = '1, 2, 3, 4, 5, 6';

    // when
    const result = LottoValidator.validateWinningNumber(validNumbers);

    // then
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('보너스 번호는 숫자로 반환된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '7';

    // when
    const result = LottoValidator.validateBonusNumber(
      winningNumbers,
      bonusNumber
    );

    // then
    expect(result).toBe(7);
  });
});
