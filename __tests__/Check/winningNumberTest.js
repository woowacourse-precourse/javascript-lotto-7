import { ERROR_MESSAGE } from '../../src/View/Error.js';

import {
  getValidBonusNumber,
  getValidWinningNumberList,
} from '../../src/Utills/Check/WinningNumbers.js';

describe('WinningNumber 유효성 검사 테스트', () => {
  describe('getValidWinningNumberList 함수 테스트', () => {
    test('유효한 당첨 번호 문자열을 입력하면 정수 배열을 반환해야 한다', () => {
      const result = getValidWinningNumberList('1,2,3,4,5,6');
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('입력 문자열에 쉼표가 없으면 makeError를 호출해야 한다', () => {
      expect(() => getValidWinningNumberList('123456')).toThrow(
        `[ERROR] ${ERROR_MESSAGE.NEED_COMMA}`
      );
    });

    const invalidWinningNumbers = [
      { input: '1,2,$4,5', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
      { input: '1,2,4.5,', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
      { input: '1,2,,4,5', expected: ERROR_MESSAGE.WINNING_NUMBER_COMMA },
      { input: '1,2,3,46', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
    ];

    invalidWinningNumbers.forEach(({ input, expected }) => {
      test(`입력 ${input}에 대해 makeError를 호출해야 한다`, () => {
        expect(() => getValidWinningNumberList(input)).toThrow(
          `[ERROR] ${expected}`
        );
      });
    });
  });

  describe('getValidBonusNumber 함수 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test('유효한 보너스 번호를 입력하면 정수를 반환해야 한다', () => {
      const result = getValidBonusNumber('7', winningNumbers);
      expect(result).toBe(7);
    });

    test('보너스 번호가 당첨 번호와 겹치면 makeError를 호출해야 한다', () => {
      expect(() => getValidBonusNumber('1', winningNumbers)).toThrow(
        `[ERROR] ${ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION}`
      );
    });

    const invalidBonusNumbers = [
      { input: '0', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
      { input: '46', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
      { input: 'abc', expected: ERROR_MESSAGE.WINNING_NUMBER_TYPE },
    ];

    invalidBonusNumbers.forEach(({ input, expected }) => {
      test(`입력 ${input}에 대해 makeError를 호출해야 한다`, () => {
        expect(() => getValidBonusNumber(input, winningNumbers)).toThrow(
          `[ERROR] ${expected}`
        );
      });
    });
  });
});
