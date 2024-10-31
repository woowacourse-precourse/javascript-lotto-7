import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';

describe('LottoMachine 클래스 테스트', () => {
  test.each([
    [1000, 1],
    [2000, 2],
    [10000, 10],
    [1000000, 1000],
  ])('구입한 로또 수량을 계산하는지 테스트', (payment, expected) => {
    const lottoMachine = new LottoMachine(payment, Lotto);

    const amount = lottoMachine.getAmount();

    expect(amount).toBe(expected);
  });
});
