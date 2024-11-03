import { LOTTO_PRICE, LOTTO_REWARD } from '../src/constants/LottoConstants.js';
import LottoResultAnalysis from '../src/controller/LottoResultAnalysis.js';
import Lotto from '../src/model/Lotto.js';

describe('LottoResultAnaysis 테스트', () => {
  let lottoResultAnalysis;
  beforeEach(() => {
    const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    lottoResultAnalysis = new LottoResultAnalysis(WINNING_NUMBER, BONUS_NUMBER);
  });

  test('한 로또 티켓의 등수를 반환한다.', () => {
    const FIRST = new Lotto([1, 2, 3, 4, 5, 6]);
    const SECOND = new Lotto([1, 2, 3, 4, 5, 7]);
    const THIRD = new Lotto([1, 2, 3, 4, 5, 9]);
    const FOURTH = new Lotto([1, 2, 3, 4, 9, 10]);
    const FIFTH = new Lotto([1, 2, 3, 9, 10, 11]);
    const NONE = new Lotto([11, 12, 13, 14, 15, 16]);

    expect(lottoResultAnalysis.checkRank(FIRST)).toEqual(1);
    expect(lottoResultAnalysis.checkRank(SECOND)).toEqual(2);
    expect(lottoResultAnalysis.checkRank(THIRD)).toEqual(3);
    expect(lottoResultAnalysis.checkRank(FOURTH)).toEqual(4);
    expect(lottoResultAnalysis.checkRank(FIFTH)).toEqual(5);
    expect(lottoResultAnalysis.checkRank(NONE)).toEqual(-1);
  });

  test('등수에 맞게 당첨 상태와 총 상금의 합을 업데이트 한다.', () => {
    lottoResultAnalysis.updateWinningStatus(2);
    lottoResultAnalysis.updateWinningStatus(3);

    expect(lottoResultAnalysis.winningStatus[2]).toBe(1);
    expect(lottoResultAnalysis.winningStatus[3]).toBe(1);

    const expectedProfitRate = LOTTO_REWARD.SECOND + LOTTO_REWARD.THIRD;

    expect(lottoResultAnalysis.rewardSum).toEqual(expectedProfitRate);
  });

  test('올바른 수익률을 계산한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 9]),
    ];

    lottoTickets.forEach((ticket) => {
      const rank = lottoResultAnalysis.checkRank(ticket);
      lottoResultAnalysis.updateWinningStatus(rank);
    });

    const expectedRewardSum =
      LOTTO_REWARD.FIRST + LOTTO_REWARD.SECOND + LOTTO_REWARD.THIRD;
    const expectedProfitRate = (
      (expectedRewardSum / (lottoTickets.length * LOTTO_PRICE)) *
      100
    ).toFixed(1);

    expect(lottoResultAnalysis.calculateProfitRate(lottoTickets)).toEqual(
      expectedProfitRate
    );
  });

  test('로또 티켓 목록을 분석해 각 로또의 당첨 상태와 수익률을 반환한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 9]),
    ];

    const result = lottoResultAnalysis.winningStatusAnalaysis(lottoTickets);

    const expectWinningStatus = [0, 1, 1, 1, 0, 0];
    const expectedRewardSum =
      LOTTO_REWARD.FIRST + LOTTO_REWARD.SECOND + LOTTO_REWARD.THIRD;
    const expectedProfitRate = (
      (expectedRewardSum / (lottoTickets.length * LOTTO_PRICE)) *
      100
    ).toFixed(1);

    expect(result.winningStatus).toEqual(expectWinningStatus);
    expect(result.profitRate).toEqual(expectedProfitRate);
  });
});
