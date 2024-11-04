import validateBonusNumber from '../src/validations/bouns-number.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';
const { INVALID_NUMBER_INPUT, INVALID_BONUS_NUMBER, INVALID_LOTTO_NUMBER } =
  ERROR_MESSAGES;

describe('보너스 번호 입력 테스트', () => {
  const testArray = [1, 2, 3, 4, 5, 6];

  test('숫자가 아닌 값을 입력했을 때 에러 메시지가 발생하는지 확인', () => {
    expect(() => validateBonusNumber('a', testArray)).toThrow(
      INVALID_NUMBER_INPUT,
    );
  });

  test('중복된 번호를 입력했을 때 에러 메시지가 발생하는지 확인', () => {
    expect(() => validateBonusNumber(3, testArray)).toThrow(
      INVALID_BONUS_NUMBER,
    );
  });

  test('범위를 벗어난 번호를 입력했을 때 에러 메시지가 발생하는지 확인', () => {
    expect(() => validateBonusNumber(46, testArray)).toThrow(
      INVALID_LOTTO_NUMBER,
    );
  });
});
