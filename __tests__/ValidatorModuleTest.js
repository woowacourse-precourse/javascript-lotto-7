import { ERROR_PREFIX } from '../src/constants';
import ValidatorModule from '../src/utils/ValidatorModules';

describe('Validator Module Test', () => {
  describe('checkPositiveInteger : 양의 정수를 확인한다.', () => {
    test.each(['a', '', 0, -10, 1.1])(
      '양의 정수가 아닌 경우 에러를 발생시킨다. ( %s )',
      (value) => {
        const validate = () => {
          ValidatorModule.checkPositiveInteger(value);
        };

        expect(validate).toThrow(ERROR_PREFIX);
      },
    );

    test.each([1, 10, 2438945])('양의 정수인 경우 정상적으로 동작한다. ( %s )', (value) => {
      const validate = () => {
        ValidatorModule.checkPositiveInteger(value);
      };

      expect(validate).not.toThrow();
    });
  });
});
