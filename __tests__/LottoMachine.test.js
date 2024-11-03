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

  test('당첨된 로또들과 투자한 돈을 이용해 총 수익률을 계산할 수 있다.', () => {
    const MONEY = 10000;
    const LOTTOS_RANK = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    };
    const ANSWER = 20315550;

    const lottoMachine = new LottoMachine(MONEY);

    expect(lottoMachine.calculateProfitFromLottos(LOTTOS_RANK)).toBe(ANSWER);
  });
});
