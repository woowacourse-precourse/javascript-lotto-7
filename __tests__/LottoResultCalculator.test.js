import Lotto from '../src/Model/Lotto.js';
import LottoResultCalculator from '../src/Model/LottoResultCalculator.js';
import WinningLotto from '../src/Model/WinningLotto.js';

describe('LottoResultCalculator 클래스 테스트', () => {
  describe('calculateResults() 메서드 테스트', () => {
    let lottos;
    let winningLotto;
    let lottoResultCalculator;

    beforeEach(() => {
      lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]), // 1등
        new Lotto([1, 2, 3, 4, 5, 7]), // 2등
        new Lotto([1, 2, 3, 4, 5, 8]), // 3등
        new Lotto([1, 2, 3, 4, 8, 9]), // 4등
        new Lotto([1, 2, 3, 8, 9, 10]), // 5등
        new Lotto([1, 2, 8, 9, 10, 11]), // 꽝
      ];

      winningLotto = new WinningLotto();
      winningLotto.setWinningNumbers('1,2,3,4,5,6');
      winningLotto.setBonusNumber(7);

      lottoResultCalculator = new LottoResultCalculator(lottos, winningLotto);
    });

    test('당첨 결과를 올바르게 계산한다.', () => {
      const result = lottoResultCalculator.calculateResults();

      expect(result.get(1).count).toBe(1); // 1등 1개
      expect(result.get(2).count).toBe(1); // 2등 1개
      expect(result.get(3).count).toBe(1); // 3등 1개
      expect(result.get(4).count).toBe(1); // 4등 1개
      expect(result.get(5).count).toBe(1); // 5등 1개
    });
  });
});
