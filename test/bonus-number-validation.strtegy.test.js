import BonusNumberValidationStrategy from '../src/validation/bonus-number-validation.strategy.js';

const WINNIN_NUMBERS = [1, 2, 3, 4, 5, 6];

/**
 *
 * @param {number} bonusNumber
 * @returns {number}
 */
function parseBonusNumber(bonusNumber) {
  return Number(bonusNumber);
}

/**
 *
 * @param {number} bonusNumber
 * @returns {BonusNumberValidationStrategy}
 */
function generateBonusNumberValidationStrategy(bonusNumber) {
  return new BonusNumberValidationStrategy(bonusNumber, parseBonusNumber, WINNIN_NUMBERS);
}

describe('BonusNumberValidationStrategy', () => {
  describe('validate', () => {
    describe('validateBonusNumber', () => {
      it.each([
        {
          description: '보너스 숫자로 빈 값이 입력된 경우 에러를 발생시켜야 한다',
          input: '',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_CAN_NOT_BE_EMPTY,
        },
        {
          description: '보너스 숫자로 음수가 입력된 경우 에러를 발생시켜야 한다',
          input: '-1',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_MUST_BE_POSITIVE_INTEGER,
        },
        {
          description: '보너스 숫자로 실수가 입력된 경우 에러를 발생시켜야 한다',
          input: '0.125',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_MUST_BE_POSITIVE_INTEGER,
        },
        {
          description: '보너스 숫자로 0이 입력된 경우 에러를 발생시켜야 한다',
          input: '0',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_MUST_BE_POSITIVE_INTEGER,
        },
        {
          description:
            '보너스 숫자로 유효하지 않은 범위의 숫자가 입력된 경우 에러를 발생시켜야 한다',
          input: '46',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_RANGE_IS_NOT_VALID,
        },
        {
          description: '보너스 숫자가 당첨 번호와 중복된 경우 에러를 발생시켜야 한다',
          input: '6',
          expectedError: BonusNumberValidationStrategy.ERROR_MESSAGE.BONUS_HAS_NO_DUPLICATED_NUMBER,
        },
      ])('$description', ({ input, expectedError }) => {
        const bonusNumberValidationStrategy = generateBonusNumberValidationStrategy(input);

        expect(() => bonusNumberValidationStrategy.validate()).toThrow(expectedError);
      });
    });
  });
});
