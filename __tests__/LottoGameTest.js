import Lotto from '../src/Model/Lotto.js';
import LottoGame from '../src/Model/LottoGame.js';
import { getLogSpy, mockRandoms } from './ApplicationTest.js';

describe('LottoGame 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('생성된 로또 개수가 lottoAmount와 동일해야 한다.', () => {
    // given
    const lottoAmount = 5;
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ]);

    // when
    const lottoGame = new LottoGame(lottoAmount);

    // then
    expect(lottoGame.getLottoAmount()).toBe(lottoAmount);
  });

  test('calculateWinningRanks 메서드 테스트', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43], // 일치하는 6개 번호
      [8, 21, 23, 41, 42, 44], // 5개 + 보너스 번호 일치
    ]);
    const lottoGame = new LottoGame(2);

    const winningLotto = new Lotto([8, 21, 23, 41, 42, 43]);
    const bonusNumber = 16;

    lottoGame.calculateWinningRanks(winningLotto, bonusNumber);

    expect(lottoGame.getWinningResult(1)).toBe(1); // 6개 일치
    expect(lottoGame.getWinningResult(2)).toBe(0); // 5개 + 보너스 번호 일치
    expect(lottoGame.getWinningResult(3)).toBe(1); // 5개 + 보너스 번호 불일치
  });

  test('calculateWinningRate 메서드 테스트', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43], // 일치하는 6개 번호
      [3, 5, 11, 16, 32, 38], // 랜덤 번호
    ]);
    const lottoGame = new LottoGame(2);

    const winningLotto = new Lotto([8, 21, 23, 44, 45, 40]);
    const bonusNumber = 16;

    lottoGame.calculateWinningRanks(winningLotto, bonusNumber);

    const winningRate = lottoGame.calculateWinningRate();
    expect(winningRate).toBeGreaterThan(0);
    expect(winningRate).toBe(250);
  });
});
