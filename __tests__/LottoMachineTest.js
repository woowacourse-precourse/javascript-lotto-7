import LottoMachine from '../src/LottoMachine.js';
import { validateLottoNumbers } from '../src/validate.js';

describe('로또 발행기 클래스 테스트', () => {
  test('구입 금액에 맞춰 로또를 발행한다.', () => {
    const purchaseAmount = 8000;
    const lottoMachine = new LottoMachine(purchaseAmount);
    const result = lottoMachine.calculateLottoCount(purchaseAmount);

    expect(result).toBe(8);
  });

  test('구입 금액이 1000원으로 나누어 떨어지지 않는 경우 예외를 발생한다.', () => {
    const purchaseAmount = 8500;

    expect(() => {
      new LottoMachine(purchaseAmount);
    }).toThrow('[ERROR]');
  });

  test('중복되지 않는 1부터 45까지의 랜덤 값 6개를 가진 로또를 발행한다.', () => {
    const lottoMachine = new LottoMachine(1000);

    const numbers = lottoMachine.pickRandomLottoNumbers();
    expect(() => validateLottoNumbers(numbers)).not.toThrow('[ERROR]');
  });

  test('로또를 원하는 수량만큼 발행한다.', () => {
    const purchaseAmount = 7000;
    const lottoMachine = new LottoMachine(purchaseAmount);
    lottoMachine.generateLottos(purchaseAmount);

    expect(lottoMachine.lottos.length).toBe(7);
  });
});
