import { ERROR_PREFIX } from '../src/constants';
import Validator from '../src/utils/Validator';

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
        Validator.isNotZero(zero);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test('값이 0이 아닌 경우 정상적으로 동작한다.', () => {
      const notZero = 1;

      // when
      const validate = () => {
        Validator.isNotZero(notZero);
      };

      // then
      expect(validate).not.toThrow();
    });
  });

  describe('isPositive() Test : 입력값이 양수인지 검증', () => {
    test.each([-1.1, 0, -20])('음수의 경우 에러를 발생시킨다.( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isPositive(value);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each([4.3, 10, 1234])('양수인 경우 정상적으로 동작한다. ( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isPositive(value);
      };

      expect(validate).not.toThrow();
    });
  });

  describe('isInteger() Test : 입력값이 정수인지 검증', () => {
    test.each([1.1, -0.1])('정수가 아닌 경우 에러를 발생시킨다.( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isInteger(value);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each([-1, 0, 10])('정수인 경우 정상적으로 동작한다. ( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isInteger(value);
      };

      expect(validate).not.toThrow();
    });
  });

  describe('isNotEmptyString() Test : 입력값이 빈문자가 아닌지 검증', () => {
    test('빈 문자열인 경우 에러를 발생시킨다.', () => {
      const emptyString = '';
      // when
      const validate = () => {
        Validator.isNotEmptyString(emptyString);
      };

      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each(['a', ' ', '*'])('빈 문자열이 아닌 경우 정상적으로 동작한다..( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isNotEmptyString(value);
      };

      // then
      expect(validate).not.toThrow(ERROR_PREFIX);
    });
  });

  describe('isNumberInBoundary() : 숫자가 지정된 범위 안에 있는지 검증', () => {
    test.each([-1, 0, 58, 10000])(
      '기본 범위를 벗어난 숫자인 경우 에러를 발생시킨다.( %s )',
      (value) => {
        // when
        const validate = () => {
          Validator.isNumberInBoundary(value);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([1, 18, 20, 45])('기본 범위 내 숫자인 경우 정상적으로 동작한다. ( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isNumberInBoundary(value);
      };

      expect(validate).not.toThrow();
    });

    test.each([
      [-10, -1, 0],
      [1, 2, 0],
      [1000001, 100000001, -100000],
    ])(
      '커스텀 범위( %s ~ %s )를 벗어난 숫자( %s )인 경우 에러를 발생시킨다.',
      (minValue, maxValue, value) => {
        // when
        const validate = () => {
          Validator.isNumberInBoundary(value, minValue, maxValue);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([
      [-10, -1, -5],
      [0, 0, 0],
      [1, 40, 5],
    ])(
      '커스텀 범위( %s ~ %s )내인 숫자( %s )인 경우 에러를 발생시킨다.',
      (minValue, maxValue, value) => {
        // when
        const validate = () => {
          Validator.isNumberInBoundary(value, minValue, maxValue);
        };

        expect(validate).not.toThrow();
      },
    );
  });

  describe('isRigthArrayLength() : 배열 길이가 적절한지 검증', () => {
    test.each([[[1]], [[]], [[1, 1, 1, 1, 1, 1, 1, 1]]])(
      '기본 지정 배열 길이와 다른 경우 에러를 발생시킨다.( %s )',
      (value) => {
        // when
        const validate = () => {
          Validator.isRigthArrayLength(value);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([
      [[1, 1, 1, 1, 1, 1]],
      [[1, 2, 3, 4, 5, 6]],
      [[101213, 'a', '', -199, 9.1213, '&&']],
    ])('기본 지정 배열 길이와 동일한 경우 정상적으로 동작한다. ( %s )', (value) => {
      // when
      const validate = () => {
        Validator.isRigthArrayLength(value);
      };

      expect(validate).not.toThrow();
    });

    test.each([
      [5, []],
      [10, [1, 2, 3]],
      [20, [1, 1, 1, 1, 1, 1, 1, 1]],
    ])(
      '커스텀 지정 배열 길이( %s )와 동일하지 않은 경우( %s ) 에러를 발생시킨다.',
      (standard, value) => {
        // when
        const validate = () => {
          Validator.isRigthArrayLength(value, standard);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([
      [0, []],
      [10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [2, [0, 0]],
    ])(
      '커스텀 지정 배열 길이( %s )와 동일한 경우( %s ) 정상적으로 동작한다.',
      (standard, value) => {
        // when
        const validate = () => {
          Validator.isRigthArrayLength(value, standard);
        };

        expect(validate).not.toThrow();
      },
    );
  });

  describe('isNumberIsDividable() : a / b가 나누어 떨어지는지 검증', () => {
    test.each([1, -1, 100, 1001])(
      '기본 피연산자와 나누어 떨어지지 않는 에러를 발생시킨다.( %s )',
      (value) => {
        // when
        const validate = () => {
          Validator.isNumberIsDividable(value);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([1000, 10000, 1000000])(
      '기본 피연산자와 나누어 떨어지지는 경우 정상적으로 동작한다. ( %s )',
      (value) => {
        // when
        const validate = () => {
          Validator.isNumberIsDividable(value);
        };

        expect(validate).not.toThrow();
      },
    );

    test.each([
      [1, 5.1],
      [10, 11],
      [2020, 4893],
    ])(
      '커스텀 피연산자( %s )와 나누어 떨어지지 않는 경우 에러를 발생시킨다. ( %s )',
      (operator, operand) => {
        // when
        const validate = () => {
          Validator.isNumberIsDividable(operator, operand);
        };

        // then
        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([
      [1, 5],
      [10, 110],
      [2020, 20200],
    ])('커스텀 피연산자( %s )와 나누어 떨어지는 경우 정상적으로 동작한다.', (standard, value) => {
      // when
      const validate = () => {
        Validator.isNumberIsDividable(value, standard);
      };

      expect(validate).not.toThrow();
    });
  });

  describe('isNotIncludeDuplicatedNumber() : 중복된 값이 없는지 검증', () => {
    test('입력 값에 중복된 값이 존재하는 경우 에러를 발생시킨다. ', () => {
      // given
      const testArr = [1, 1, 2, 3, 4];

      // when
      const validate = () => {
        Validator.isNotIncludeDuplicatedNumber(testArr);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test('입력 값에 중복이 없는 경우 정상적으로 동작한다.', () => {
      // given
      const testArr = [1, 2, 3, 4];
      // when
      const validate = () => {
        Validator.isNotIncludeDuplicatedNumber(testArr);
      };

      expect(validate).not.toThrow();
    });
  });

  describe('isNotIncludeList() : 배열에 값이 존재하는지 검증', () => {
    test('입력 값에 중복된 값이 존재하는 경우 에러를 발생시킨다. ', () => {
      // given
      const testValue = 5;
      const testArr = [1, 2, 3, 4, 5, 6];

      // when
      const validate = () => {
        Validator.isNotIncludeList(testValue, testArr);
      };

      // then
      expect(validate).toThrow(ERROR_PREFIX);
    });

    test('입력 값에 중복이 없는 경우 정상적으로 동작한다.', () => {
      // given
      const testValue = 15;
      const testArr = [1, 2, 3, 4, 5, 6];
      // when
      const validate = () => {
        Validator.isNotIncludeList(testValue, testArr);
      };

      expect(validate).not.toThrow();
    });
  });
});
