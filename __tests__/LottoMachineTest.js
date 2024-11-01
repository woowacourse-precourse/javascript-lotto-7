import LottoMachine from '../src/LottoMachine.js';

describe('LottoMachine test', () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine(10000);
  });

  test('구매한 수량 가져오기', () => {
    expect(lottoMachine.getLottoQuantity()).toBe(10);
  });

  test('투입한 금액에 맞게 로또가 생성되어야 한다.', () => {
    const lottos = lottoMachine.getLottos();
    const quantity = lottoMachine.getLottoQuantity();

    expect(lottos.length).toBe(quantity);
  });

  test('생성된 로또의 길이는 6이다.', () => {
    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto) => {
      expect(lotto.length).toBe(6);
    });
  });
});
