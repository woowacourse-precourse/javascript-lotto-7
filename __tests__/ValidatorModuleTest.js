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

  describe('checkPurchaseCash : 구매 금액 입력값을 검증한다.', () => {
    test.each([
      ['빈 값이 입력되었을 경우', ''],
      ['양의 정수가 들어오지 않은 경우', -1000],
      ['단위 금액으로 나누어 떨어지지 않는 경우', 10020],
    ])('%s, 에러를 발생시킨다.', (_, value) => {
      const validate = () => {
        ValidatorModule.checkPurchaseCash(value);
      };

      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each([1000, 12000])('유효한 구매 금액이 입력되었을 때 정상적으로 동작한다.', (value) => {
      const validate = () => {
        ValidatorModule.checkPurchaseCash(value);
      };

      expect(validate).not.toThrow(ERROR_PREFIX);
    });
  });
});
