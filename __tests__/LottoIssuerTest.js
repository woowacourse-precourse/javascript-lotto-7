import { Random } from '@woowacourse/mission-utils';
import LottoIssuer from '../src/classes/LottoIssuer.js';
import Lotto from '../src/classes/Lotto.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe('LottoIssuer 클래스 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // 구입 금액으로 로또 개수 계산 테스트
  test('구입 금액에 따라 올바른 로또 개수가 계산된다.', () => {
    const purchaseAmount = 5000;
    const lottoCount = LottoIssuer.calculateLottoCount(purchaseAmount);
    expect(lottoCount).toBe(5);
  });

  test('구입 금액이 0이면 로또 개수는 0이다.', () => {
    const purchaseAmount = 0;
    const lottoCount = LottoIssuer.calculateLottoCount(purchaseAmount);
    expect(lottoCount).toBe(0);
  });

  // 로또 번호 생성 및 로또 발행 테스트
  test('로또 1장을 생성할 때, 각 로또 번호는 Lotto 클래스의 인스턴스다.', () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6];
    Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);

    const lottos = LottoIssuer.generateLottos(1);
    expect(lottos[0]).toBeInstanceOf(Lotto);
    expect(lottos[0].getNumbers()).toEqual(mockNumbers);
  });

  test('로또 3장을 생성할 때, 각 로또 번호는 Lotto 클래스의 인스턴스다.', () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6];
    Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);

    const lottos = LottoIssuer.generateLottos(3);
    expect(lottos).toHaveLength(3);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumbers()).toEqual(mockNumbers);
    });
  });

  test('로또 번호는 오름차순으로 정렬된 6개의 고유 번호로 구성된다.', () => {
    const mockNumbers = [8, 21, 23, 41, 42, 43];
    Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);

    const [lotto] = LottoIssuer.generateLottos(1);
    expect(lotto.getNumbers()).toEqual(mockNumbers.sort((a, b) => a - b));
  });
});
