import { ERROR_PREFIX } from '../src/constants.js';
import InputModules from '../src/views/InputModules.js';
import { mockQuestions } from './testUtils.js';

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

  describe('getLottoWinnerNumbers : 우승 로또 번호 입력 테스트', () => {
    test.each([
      '1,2,3,4',
      '1,1,2,3,4,5',
      ',2,3,4,5,6',
      '-1,2,3,4,5,6',
      '1.1,2,3,4,5,6',
      '47,2,3,4,5,6',
      '0,2,3,4,5,6',
      'a,2,3,4,5,6',
    ])('유효하지 않은 값이 포함되어 있는 경우 에러를 발생시킨다. ( %s )', (inputValue) => {
      mockQuestions([inputValue]);

      expect(InputModules.getLottoWinnerNumbers()).rejects.toThrow(ERROR_PREFIX);
    });

    test.each([
      ['1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
      ['7,10,14,23,41,42', [7, 10, 14, 23, 41, 42]],
    ])(
      '유효한 값으로 이루어진 입력값인 경우 숫자 배열로 반환한다. ( %s )',
      async (inputValue, result) => {
        mockQuestions([inputValue]);

        const winnerNumbers = await InputModules.getLottoWinnerNumbers();

        expect(winnerNumbers).toEqual(result);
      },
    );
  });

  describe('getLottoWinnerBonusNumber : 보너스 번호 입력 테스트', () => {
    let lottoWinnerNumbers = [1, 2, 3, 4, 5, 6];

    test.each(['a', '-1', '', '0', '1.1', '1', '48'])(
      '유효하지 않은 값이 입력된 경우 에러를 발생시킨다. ( %s )',
      (inputValue) => {
        mockQuestions([inputValue]);

        expect(InputModules.getLottoWinnerBonusNumber(lottoWinnerNumbers)).rejects.toThrow(
          ERROR_PREFIX,
        );
      },
    );
    test.each([
      ['7', 7],
      ['45', 45],
      ['18', 18],
    ])(
      '유효한 값이 입력되는 경우 해당 값을 정수로 반환한다. ( %s )',
      async (inputValue, result) => {
        mockQuestions([inputValue]);

        const bonusNumber = await InputModules.getLottoWinnerBonusNumber(lottoWinnerNumbers);

        expect(bonusNumber).toBe(result);
      },
    );
  });
});
