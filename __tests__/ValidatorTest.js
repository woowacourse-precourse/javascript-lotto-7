import { ERROR_PREFIX } from '../src/constants';
import Validator from '../src/utils/Valldator';

describe('Validator Test', () => {
  describe('isNumber() Test : 입력값이 숫자인지 검증', () => {
    test.each([',', '-', 'a', ')'])('문자가 입력된 경우 에러를 발생시킨다.( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isNumber(value);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each([0, 4, 10, 1234])('숫자를 입력하면 정상적으로 동작한다. ( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isNumber(value);
      };

      expect(validate).not.toThrow();
    });
  });

  describe('isNotZero() Test : 입력값이 0이 아닌지 검증', () => {
    test('값이 0인 경우 에러를 발생시킨다.', () => {
      const zero = 0;

      // when
      const validate = () => {
        Validator.isZero(zero);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test('값이 0이 아닌 경우 정상적으로 동작한다.', () => {
      const notZero = 1;

      // when
      const validate = () => {
        Validator.isZero(notZero);
      };

      // then
      expect(validate).not.toThrow();
    });
  });
});
