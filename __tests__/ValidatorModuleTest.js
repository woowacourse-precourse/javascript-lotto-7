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

  describe('checkLottoNumbers: 당첨 번호 입력값을 검증', () => {
    test.each([
      ['중복 숫자가 존재하는 경우', [1, 2, 3, 4, 5]],
      ['번호 개수가 맞지 않는 경우', [1, 1, 3, 4, 5, 6]],
      ['빈 값이 포함된 경우', [1, 2, 3, 4, 5, '']],
      ['실수가 포함된 경우', [1, 2, 3, 4, 5, 1.1]],
      ['음수가 포함된 경우', [1, 2, 3, 4, 5, -1]],
      ['0이 포함된 경우', [1, 2, 3, 4, 5, 0]],
      ['로또 범위를 벗어난 숫자가 포함된 경우', [1, 2, 3, 4, 5, 46]],
    ])('%s, 에러를 발생시킨다.', (_, value) => {
      const validate = () => {
        ValidatorModule.checkLottoNumbers(value);
      };

      expect(validate).toThrow(ERROR_PREFIX);
    });

    test.each([[[1, 2, 3, 4, 5, 6]], [[4, 18, 25, 29, 40, 45]]])(
      '유효한 당첨 번호가 입력되었을 때 정상적으로 동작한다. ( %s )',
      (value) => {
        const validate = () => {
          ValidatorModule.checkLottoNumbers(value);
        };

        expect(validate).not.toThrow(ERROR_PREFIX);
      },
    );
  });

  describe('checkBonusNumber : 보너스 번호 입력값을 검증', () => {
    test.each([
      ['빈 값이 입력되었을 경우', [1, 2, 3, 4, 5, 6], ''],
      ['실수가 포함된 경우', [1, 2, 3, 4, 5, 6], 1.1],
      ['음수가 포함된 경우', [1, 2, 3, 4, 5, 6], -7],
      ['0이 포함된 경우', [1, 2, 3, 4, 5, 6], 0],
      ['로또 범위를 벗어난 숫자가 포함된 경우', [1, 2, 3, 4, 5, 6], 46],
      ['당첨 번호와 중복되는 값이 있는 경우', [1, 2, 3, 4, 5, 6], 6],
    ])('%s, 에러를 발생시킨다.', (_, winnerNumbers, value) => {
      const validate = () => {
        ValidatorModule.checkBonusNumber(winnerNumbers, value);
      };

      expect(validate).toThrow(ERROR_PREFIX);
    });

    test('유효한 구매 금액이 입력되었을 때 정상적으로 동작한다.', () => {
      // given
      const testWinnerNumber = [1, 2, 3, 4, 5, 6];
      const testBonus = 8;

      const validate = () => {
        ValidatorModule.checkBonusNumber(testWinnerNumber, testBonus);
      };

      expect(validate).not.toThrow(ERROR_PREFIX);
    });
  });
});
