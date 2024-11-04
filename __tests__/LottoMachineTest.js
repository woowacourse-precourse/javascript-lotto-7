import LottoMachine from '../src/LottoMachine.js';

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
});
