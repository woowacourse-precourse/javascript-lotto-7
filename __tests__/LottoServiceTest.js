import LottoService from '../src/services/LottoService.js';
import Lotto from '../src/models/Lotto.js';

describe('LottoService 클래스 테스트', () => {
  test('로또 번호 자동 생성 테스트', () => {
    const lotto = LottoService.generateLotto();
    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getNumbers()).toHaveLength(6);
  });

  test('당첨 번호 비교 및 결과 확인', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const results = LottoService.checkWinning(lottos, winningNumbers, bonusNumber);
    expect(results).toContain('match6');
    expect(results).toContain(null);
  });
});
