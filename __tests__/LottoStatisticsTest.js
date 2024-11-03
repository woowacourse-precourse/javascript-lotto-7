import WinningLotto from '../src/WinningLotto';
import LottoStatistics from '../src/LottoStatistics';
import Lotto from '../src/Lotto';
import { FIVE_BONUS_KEY } from '../src/constants/lottoConstants';

let purchasedLottos;
let winningLotto;
let purchaseAmount;
let lottoStatistics;

beforeEach(() => {
  purchasedLottos = [
    new Lotto([8, 9, 10, 11, 12, 13]), // 모두 불일치
    new Lotto([1, 2, 3, 8, 9, 11]), // 3개 일치
    new Lotto([1, 2, 3, 4, 8, 9]), // 4개 일치
    new Lotto([1, 2, 3, 4, 5, 8]), // 5개 일치
    new Lotto([1, 2, 3, 4, 5, 7]), // 5개 일치 + 보너스
    new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치
  ];
  winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
  winningLotto.setBonusNumber(7);
  purchaseAmount = 6000;
  lottoStatistics = new LottoStatistics(purchasedLottos, winningLotto, purchaseAmount);
  lottoStatistics.calculateStatistics();
});

test('calculateStatistics 메서드 테스트 - 당첨 통계 계산 확인', () => {
  const winningStatistics = lottoStatistics.getWinningStatistics();

  expect(winningStatistics[3].count).toBe(1);
  expect(winningStatistics[4].count).toBe(1);
  expect(winningStatistics[5].count).toBe(1);
  expect(winningStatistics[FIVE_BONUS_KEY].count).toBe(1);
  expect(winningStatistics[6].count).toBe(1);
});
