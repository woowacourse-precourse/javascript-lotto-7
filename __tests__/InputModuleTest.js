import { ERROR_PREFIX } from '../src/constants.js';
import InputModules from '../src/views/InputModules.js';
import { mockQuestions } from './ApplicationTest.js';

describe('InputModule Test', () => {
  describe('getPurchaseCash : 로또 구입 금액 입력 테스트', () => {
    test.each(['10', '', '-1', '1.1'])(
      '예외 케이스 입력시 에러를 발생시킨다. ( %s )',
      (inputValue) => {
        mockQuestions([inputValue]);

        expect(InputModules.getPurchaseCash()).rejects.toThrow(ERROR_PREFIX);
      },
    );

    test.each([
      ['1000', 1000],
      ['12000', 12000],
      ['8000', 8000],
    ])('정상 케이스 입력시 해당 값을 정수로 반환한다. ( %s )', async (inputValue, result) => {
      mockQuestions([inputValue]);

      const purchaseCash = await InputModules.getPurchaseCash();

      expect(purchaseCash).toBe(result);
    });
  });
});
