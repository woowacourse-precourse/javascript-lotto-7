import { Random } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';

describe('LottoMachine 클래스 테스트', () => {
  const mockingRandomNumbers = (numbers) => {
    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockImplementation(() => numbers);
  };

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

  test('로또를 발급하는지 테스트한다.', () => {
    const PAYMENT = 1000;
    const NUMBERS = [1, 2, 3, 4, 5, 6];
    const lottoMachine = new LottoMachine(PAYMENT, Lotto);

    mockingRandomNumbers(NUMBERS);

    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumbers()).toEqual(expect.arrayContaining(NUMBERS));
    });
  });
});
