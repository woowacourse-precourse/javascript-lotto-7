import ResultCalculator from '../src/utils/ResultCalculator.js';
import { WINNING_AMOUNTS } from '../src/constants/values.js';

describe('ResultCalculator 결과 계산', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test('6개 숫자가 모두 일치하면 1등 상금을 반환한다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 3, 4, 5, 6] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(WINNING_AMOUNTS.FIRST);
    expect(matchTable[0]).toBe(1);
  });

  test('5개 숫자와 보너스 번호가 일치하면 2등 상금을 반환한다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 3, 4, 5, 7] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(WINNING_AMOUNTS.SECOND);
    expect(matchTable[1]).toBe(1);
  });

  test('5개 숫자만 일치하면 3등 상금을 반환한다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 3, 4, 5, 8] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(WINNING_AMOUNTS.THIRD);
    expect(matchTable[2]).toBe(1);
  });

  test('4개 숫자만 일치하면 4등 상금을 반환한다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 3, 4, 9, 10] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(WINNING_AMOUNTS.FORTH);
    expect(matchTable[3]).toBe(1);
  });

  test('3개 숫자만 일치하면 5등 상금을 반환한다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 3, 11, 12, 13] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(WINNING_AMOUNTS.FIFTH);
    expect(matchTable[4]).toBe(1);
  });

  test('2개 이하의 숫자가 일치하면 상금을 받지 않는다.', () => {
    const lottoList = [{ getNumbers: () => [1, 2, 12, 13, 14, 15] }];
    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    expect(money).toBe(0);
    expect(matchTable.every((count) => count === 0)).toBe(true);
  });
});
