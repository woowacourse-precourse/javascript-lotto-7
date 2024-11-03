import LottoMachine from '../src/LottoMachine.js';
import LOTTO_RULE from '../src/constant/lotto.js';

describe('LottoMachine test', () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine();
  });

  test.each([
    { input: 10000, output: 10 },
    { input: 50000, output: 50 },
    { input: 100000, output: 100 },
  ])('투입한 금액에 맞게 로또가 생성되어야 한다.', ({ input, output }) => {
    lottoMachine.buyLottos(input);

    const lottos = lottoMachine.getLottos();

    expect(lottos.length).toBe(output);
  });

  test.each([2000, 3000, 5000])('생성된 로또의 길이는 6이다.', () => {
    lottoMachine.buyLottos(2000);
    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto) => {
      expect(lotto.length).toBe(LOTTO_RULE.LOTTO_NUMBER_LENGTH);
    });
  });
});
