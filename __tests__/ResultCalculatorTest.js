import ResultCalculator from '../src/components/ResultCalculator.js';

describe('ResultCalculator 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = [7];
  let resultCalculator;

  beforeEach(() => {
    resultCalculator = new ResultCalculator(winningNumbers, bonusNumber);
  });

  test('countWinningNumbers - 로또 번호와 당첨 번호 매칭 개수 확인', () => {
    const lotto = { getNumbers: () => [1, 2, 3, 8, 9, 10] };
    const matchedCount = resultCalculator.countWinningNumbers(lotto);

    expect(matchedCount).toBe(3);
  });

  test('hasMatchedBonusNumbers - 보너스 번호와 매칭 여부 확인', () => {
    const lottoWithBonus = { getNumbers: () => [1, 2, 3, 4, 5, 7] };
    const lottoWithoutBonus = { getNumbers: () => [1, 2, 3, 4, 5, 8] };

    expect(resultCalculator.hasMatchedBonusNumbers(lottoWithBonus)).toBe(true);
    expect(resultCalculator.hasMatchedBonusNumbers(lottoWithoutBonus)).toBe(
      false,
    );
  });

  test('countSameNumber - target 번호 집합과 일치하는 개수 계산', () => {
    const lotto = { getNumbers: () => [1, 2, 3, 8, 9, 10] };
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const matchedCount = resultCalculator.countSameNumber(lotto, targetNumbers);

    expect(matchedCount).toBe(3);
  });

  test('calculatePrizes 메서드가 로또 리스트에 대한 당첨 결과를 정확히 계산하는지 확인', () => {
    const lottoList = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
      { getNumbers: () => [1, 2, 3, 4, 5, 7] },
      { getNumbers: () => [1, 2, 3, 4, 5, 8] },
      { getNumbers: () => [1, 2, 3, 4, 9, 10] },
      { getNumbers: () => [1, 2, 3, 11, 12, 13] },
      { getNumbers: () => [14, 15, 16, 17, 18, 19] },
    ];

    const prizeResults = resultCalculator.calculatePrizes(lottoList);

    expect(prizeResults.get(6)).toBe(1);
    expect(prizeResults.get(5).withBonus).toBe(1);
    expect(prizeResults.get(5).withoutBonus).toBe(1);
    expect(prizeResults.get(4)).toBe(1);
    expect(prizeResults.get(3)).toBe(1);
    expect(prizeResults.get(7)).toBeUndefined();
  });
});
