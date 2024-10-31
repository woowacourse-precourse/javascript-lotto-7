import LottoRepository from '../src/models/LottoRepository.js';
import Lotto from '../src/Lotto.js';

describe('LottoRepository 클래스 테스트', () => {
  test('getLottoAmount 메소드 테스트', () => {
    const lottoRepository = new LottoRepository();
    expect(lottoRepository.getLottoAmount()).toBe(0);
  });

  test('addLottos, getLottoArray 메소드 테스트', () => {
    const lottoRepository = new LottoRepository();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12]);

    lottoRepository.addLottos(lotto1);
    lottoRepository.addLottos(lotto2);

    expect(lottoRepository.getLottoAmount()).toBe(2);
    expect(lottoRepository.getLottoArray()).toEqual([lotto1, lotto2]);
  });
});
