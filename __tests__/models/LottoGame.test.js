import LottoGame from '../../src/model/LottoGame.js';
import { CONFIG, RANK } from '../../src/constants/constants.js';

describe('LottoGame 테스트', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame(8000);
  });

  test('구매 금액에 따라 로또 번호가 올바르게 초기화되어야 한다', () => {
    const tickets = 8000 / CONFIG.PURCHASE_AMOUNT_UNIT;
    expect(lottoGame.getLottoNumbers()).toHaveLength(tickets);
  });

  test('총 수익률이 올바르게 계산되어야 한다', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

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
});
