import LottoMachine from '../src/LottoMachine.js';

describe('LottoMachine test', () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine(10000);
  });

  test('구매한 수량 가져오기', () => {
    expect(lottoMachine.getLottoQuantity()).toBe(10);
  });
});
