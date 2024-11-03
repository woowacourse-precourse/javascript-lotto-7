import Lotto from '../src/model/Lotto.js';
import LottoMatcher from '../src/model/LottoMatcher.js';
import LottoPocket from '../src/model/LottoPocket.js';

describe('LottoMatcher 클래스 테스트', () => {
  test('유효한 당첨 번호와 보너스 번호를 받아 현재 갖고 있는 로또의 등수를 반환한다.', () => {
    const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 30;
    const LOTTO_POCKET = new LottoPocket([
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 30]),
      new Lotto([4, 5, 6, 30, 31, 32]),
      new Lotto([22, 23, 24, 25, 26, 27]),
    ]);
    const ANSWER = {
      1: 1,
      2: 1,
      3: 0,
      4: 0,
      5: 1,
    };

    const lottoMatcher = new LottoMatcher(WINNING_NUMBER, BONUS_NUMBER);

    const lottosRank = lottoMatcher.getWinningLottos(LOTTO_POCKET);

    expect(lottosRank).toEqual(ANSWER);
  });
});
