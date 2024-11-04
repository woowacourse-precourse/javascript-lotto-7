import NumberValidator from '../src/utils/NumberValidator.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

describe('NumberValidator 클래스 테스트', () => {
  describe('validateIsEmpty 메서드 테스트', () => {
    test('빈 문자열을 입력하면 예외가 발생한다', () => {
      expect(() => {
        NumberValidator.validateIsEmpty('');
      }).toThrow(ERROR_MESSAGES.IS_EMPTY);
    });

    test('문자열이 비어있지 않으면 예외가 발생하지 않는다', () => {
      expect(() => {
        NumberValidator.validateIsEmpty('1000');
      }).not.toThrow();
    });
  });

  describe('validateIsOnlyDigits 메서드 테스트', () => {
    test('숫자로만 이루어진 문자열은 예외가 발생하지 않는다', () => {
      expect(() => {
        NumberValidator.validateIsOnlyDigits('1000');
      }).not.toThrow();
    });

    test.each([
      ['abc', ERROR_MESSAGES.INVALID_INPUT],
      ['1000abc', ERROR_MESSAGES.INVALID_INPUT],
      ['1000.5', ERROR_MESSAGES.INVALID_INPUT],
      ['-1000', ERROR_MESSAGES.INVALID_INPUT],
      ['1000/2', ERROR_MESSAGES.INVALID_INPUT],
      ['', ERROR_MESSAGES.INVALID_INPUT],
    ])('입력값 "%s"에 대해 예외 "%s"가 발생한다', (input, expectedError) => {
      expect(() => {
        NumberValidator.validateIsOnlyDigits(input);
      }).toThrow(expectedError);
    });
  });
});
