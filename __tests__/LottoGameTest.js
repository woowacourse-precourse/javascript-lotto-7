import LottoGame from '../src/model/LottoGame.js';
import { RESULT_INITIAL_STATE } from '../src/constants/lottoResults.js';

describe('LottoGame 함수 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test('1등 당첨 시 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [[1, 2, 3, 4, 5, 6]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual({
      ...RESULT_INITIAL_STATE,
      first: 1,
    });
    expect(game.totalPrize).toBe(2000000000);
  });

  test('2등 당첨 (5개 번호 + 보너스 번호 일치) 시 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [[1, 2, 3, 4, 5, 7]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual({
      ...RESULT_INITIAL_STATE,
      second: 1,
    });
    expect(game.totalPrize).toBe(30000000);
  });

  test('3등 당첨 (5개 번호 일치) 시 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [[1, 2, 3, 4, 5, 8]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual({
      ...RESULT_INITIAL_STATE,
      third: 1,
    });
    expect(game.totalPrize).toBe(1500000);
  });

  test('4등 당첨 (4개 번호 일치) 시 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [[1, 2, 3, 4, 10, 11]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual({
      ...RESULT_INITIAL_STATE,
      fourth: 1,
    });
    expect(game.totalPrize).toBe(50000);
  });

  test('5등 당첨 (3개 번호 일치) 시 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [[1, 2, 3, 10, 11, 12]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual({
      ...RESULT_INITIAL_STATE,
      fifth: 1,
    });
    expect(game.totalPrize).toBe(5000);
  });

  test('당첨 번호와 보너스 번호가 일치하지 않으면 당첨되지 않는다.', () => {
    const lottoTickets = [[10, 11, 12, 13, 14, 15]];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    expect(game.result).toEqual(RESULT_INITIAL_STATE);
    expect(game.totalPrize).toBe(0);
  });

  test('여러 장의 티켓에 대해 각 등수별 당첨 결과와 총 상금이 정확히 반환된다.', () => {
    const lottoTickets = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
      [1, 2, 3, 4, 10, 11], // 4등
      [1, 2, 3, 10, 11, 12], // 5등
      [10, 11, 12, 13, 14, 15], // 미당첨
    ];
    const game = new LottoGame(lottoTickets, winningNumbers, bonusNumber);
    game.calculateResult();

    const expectedResult = {
      ...RESULT_INITIAL_STATE,
      first: 1,
      second: 1,
      third: 1,
      fourth: 1,
      fifth: 1,
    };
    const totalPrize = 2000000000 + 30000000 + 1500000 + 50000 + 5000;

    expect(game.result).toEqual(expectedResult);
    expect(game.totalPrize).toBe(totalPrize);
  });
});
