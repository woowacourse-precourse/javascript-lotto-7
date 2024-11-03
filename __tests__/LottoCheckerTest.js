import { LottoChecker } from '../src/models/index.js';
import { InputStore } from '../src/services/index.js';
import Lotto from '../src/Lotto.js';

describe('LottoChecker 클래스 테스트', () => {
  let lottoChecker;
  let inputStore;

  beforeEach(() => {
    jest.restoreAllMocks();
    lottoChecker = new LottoChecker();
    inputStore = InputStore.getInstance();
    inputStore.setMainNumbers([1, 2, 3, 4, 5, 6]);
    inputStore.setBonusNumber(7);
  });

  describe('checkLotto 메서드 테스트', () => {
    test.each([
      [{ numbers: [1, 2, 3, 4, 5, 6] }, [6, false, 1, 2_000_000_000], '6개 일치 (1등)'],
      [{ numbers: [1, 2, 3, 4, 5, 7] }, [5, true, 2, 30_000_000], '5개 일치, 보너스 볼 일치 (2등)'],
      [{ numbers: [1, 2, 3, 4, 5, 8] }, [5, false, 3, 1_500_000], '5개 일치 (3등)'],
      [{ numbers: [1, 2, 3, 4, 8, 9] }, [4, false, 4, 50_000], '4개 일치 (4등)'],
      [{ numbers: [1, 2, 3, 8, 9, 10] }, [3, false, 5, 5_000], '3개 일치 (5등)'],
      [{ numbers: [1, 2, 8, 9, 10, 11] }, [2, false, 0, 0], '2개 일치 (미당첨)'],
    ])('%o인 경우 %o을 반환한다', (data, expected) => {
      const lotto = new Lotto(data.numbers);
      const result = lottoChecker.checkLotto(lotto);

      expected.entries((_, value) => {
        expect(result.getMatchCount()).toBe(value);
        expect(result.isBonusMatch()).toBe(value);
        expect(result.getRanking()).toBe(value);
        expect(result.getPrizeMoney()).toBe(value);
      });
    });
  });
});
