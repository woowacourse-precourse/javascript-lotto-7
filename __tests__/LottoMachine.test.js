import Lotto from '../src/model/Lotto.js';
import LottoMachine from '../src/model/LottoMachine.js';

describe('LottoMachine 클래스 테스트', () => {
  test.each([
    [1000, 1],
    [3000, 3],
    [8000, 8],
  ])('유효한 money를 받으면 해당 money 만큼 로또를 생성한다.', (money, lottoCount) => {
    const lottoMachine = new LottoMachine(money);

    const lottos = lottoMachine.createLottos();

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
    expect(lottos.length).toBe(lottoCount);
  });

  test('유효한 money를 받으면 해당 money를 반환할 수 있다.', () => {
    const MONEY = 100000;

    const lottoMachine = new LottoMachine(MONEY);

    expect(lottoMachine.getChargedMoney()).toBe(MONEY);
  });
});
