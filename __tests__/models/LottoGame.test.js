import LottoGame from '../../src/model/LottoGame.js';
import { CONFIG, RANK } from '../../src/constants/constants.js';

describe('LottoGame 클래스 테스트', () => {
  let lottoGame;
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const ticketCount = 8000 / CONFIG.PURCHASE_AMOUNT_UNIT;

  beforeEach(() => {
    lottoGame = new LottoGame(8000);
  });

  test('구매 금액에 따라 로또 번호가 올바르게 초기화되어야 한다.', () => {
    expect(lottoGame.getLottoNumbers()).toHaveLength(ticketCount);
  });

  test('총 수익률이 올바르게 계산되어야 한다.', () => {
    lottoGame.getLottoNumbers().forEach((lotto, index) => {
      jest.spyOn(lotto, 'getMatchCount').mockImplementation(() => {
        if (index === 0) return 3;
        return 0;
      });
    });
    lottoGame.calculatePrize(winningNumbers, bonusNumber);

    const revenue = lottoGame.calculateRevenue();
    expect(revenue).toBeCloseTo(62.5, 1);
  });

  test('로또 티켓이 구매 금액에 따라 정확히 생성되어야 한다.', () => {
    expect(lottoGame.getLottoNumbers()).toHaveLength(ticketCount);
  });

  test('예상치 못한 로또 번호가 없는지 확인해야 한다.', () => {
    const invalidNumbers = [0, 50, 60];
    const lottoNumbers = lottoGame.getLottoNumbers();
    invalidNumbers.forEach((num) => {
      expect(lottoNumbers).not.toContainEqual(expect.arrayContaining([num]));
    });
  });

  test('상금이 올바르게 계산되어야 한다.', () => {
    lottoGame.getLottoNumbers().forEach((lotto, index) => {
      jest.spyOn(lotto, 'getMatchCount').mockImplementation(() => {
        if (index === 0) return 3; // 하나의 로또에서 3개 일치
        if (index === 1) return 5; // 두 번째 로또에서 5개 일치
        return 0;
      });
    });
    lottoGame.calculatePrize(winningNumbers, bonusNumber);

    expect(lottoGame.getPrizeAmount(RANK.FIFTH.matchCount)).toBe(
      RANK.FIFTH.prize
    );
    expect(lottoGame.getPrizeAmount(RANK.SECOND.matchCount)).toBe(
      RANK.SECOND.prize
    );
  });

  test('모든 로또 티켓에서 상금이 없는 경우 수익률이 0이 되어야 한다.', () => {
    lottoGame.getLottoNumbers().forEach((lotto) => {
      jest.spyOn(lotto, 'getMatchCount').mockReturnValue(0);
    });
    lottoGame.calculatePrize(winningNumbers, bonusNumber);

    const revenue = lottoGame.calculateRevenue();
    expect(revenue).toBe(0);
  });
});
