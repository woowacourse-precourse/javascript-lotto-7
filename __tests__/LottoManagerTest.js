import Lotto from '../src/lotto/Lotto.js';
import LottoManager from '../src/lotto/LottoManager.js';

describe('LottoManager 클래스 테스트', () => {
  let lottoManager;

  beforeEach(() => {
    const price = 5000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    lottoManager = new LottoManager(winningNumbers, bonusNumber, price);
  });

  test.each([
    [8000, 8],
    [5000, 5],
    [24000, 24],
  ])('#getLottoCount > %d원이면 로또 %d개', (price, expected) => {
    const result = lottoManager.getLottoCountTest(price);

    expect(result).toBe(expected);
  });

  test('#getMatchedCountInLottos', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 10, 11, 12]),
      new Lotto([1, 2, 9, 10, 11, 12]),
      new Lotto([1, 38, 9, 10, 11, 12]),
      new Lotto([29, 38, 9, 10, 11, 12]),
    ];

    lottoManager.setLottosTest(lottos);

    const result = lottoManager.getMatchedCountInLottosTest();

    const expected = [
      { matchedCountWithWinningNumbers: 6, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 5, isMatchedWithBonusNumber: true },
      { matchedCountWithWinningNumbers: 4, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 3, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 2, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 1, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 0, isMatchedWithBonusNumber: false },
    ];

    expect(result).toEqual(expected);
  });

  test('#getMatchedCountPerMatchOption', () => {
    const matchedCountInLottos = [
      { matchedCountWithWinningNumbers: 6, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 5, isMatchedWithBonusNumber: true },
      { matchedCountWithWinningNumbers: 4, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 3, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 3, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 2, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 1, isMatchedWithBonusNumber: false },
      { matchedCountWithWinningNumbers: 0, isMatchedWithBonusNumber: false },
    ];

    lottoManager.setMatchedCountInLottosTest(matchedCountInLottos);

    const result = lottoManager.getMatchedCountPerMatchOptionTest();

    const expected = [
      { count: 3, matchedCount: 2, isBonus: false, prize: 5000 },
      { count: 4, matchedCount: 1, isBonus: false, prize: 50000 },
      { count: 5, matchedCount: 0, isBonus: false, prize: 1500000 },
      { count: 5, matchedCount: 1, isBonus: true, prize: 30000000 },
      { count: 6, matchedCount: 1, isBonus: false, prize: 2000000000 },
    ];

    expect(result).toEqual(expected);
  });
});
