import LottoMachine from '../src/LottoMachine';
import { mockRandoms } from './ApplicationTest';

describe('LottoMachine 테스트', () => {
  test('1~45 사이의 중복되지 않는 6개의 숫자를 뽑는다.', () => {
    const mockValues = [[8, 21, 23, 41, 42, 43]];

    mockRandoms(mockValues);

    const lottoMachine = new LottoMachine();
    const lottoNumbers = lottoMachine.generateLottoNumbers();

    expect(lottoNumbers).toHaveLength(6);

    lottoNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });

  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const purchaseAmount = 3;
    const mockValues = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const output = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];

    mockRandoms(mockValues);

    const lottoMachine = new LottoMachine();
    lottoMachine.generateLottoTickets(purchaseAmount);
    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(output[index]);
    });
  });
});
