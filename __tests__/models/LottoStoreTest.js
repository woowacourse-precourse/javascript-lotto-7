import LottoStore from '../../src/model/LottoStore.js';
import Lotto from '../../src/model/Lotto.js';
import Validator from '../../src/utils/validator.js';
import { Random } from '@woowacourse/mission-utils';

jest.mock('../../src/utils/validator.js');
jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe('LottoStore 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Validator.validatePurchaseAmount.mockImplementation(() => true);
  });

  test('생성자 - 유효한 금액으로 객체 생성 및 로또 개수 확인', () => {
    const amount = 5000;
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const lottoStore = new LottoStore(amount);

    expect(Validator.validatePurchaseAmount).toHaveBeenCalledWith(amount);
    expect(lottoStore.getCount()).toBe(5);
    expect(lottoStore.getLottos()).toHaveLength(5);
  });

  test('생성자 - 유효하지 않은 금액으로 객체 생성 시 예외 발생', () => {
    Validator.validatePurchaseAmount.mockImplementation(() => {
      throw new Error('[ERROR]');
    });

    expect(() => new LottoStore(500)).toThrow('[ERROR]');
  });

  test('getLottos() - 로또 배열 반환 확인', () => {
    const amount = 3000;
    const expectedNumbers = [1, 2, 3, 4, 5, 6];
    Random.pickUniqueNumbersInRange.mockReturnValue(expectedNumbers);

    const lottoStore = new LottoStore(amount);
    const lottos = lottoStore.getLottos();

    expect(lottos).toHaveLength(3);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumber()).toEqual(expectedNumbers);
    });
  });

  test('getCount() - 로또 개수 반환 확인', () => {
    const amount = 10000;
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const lottoStore = new LottoStore(amount);

    expect(lottoStore.getCount()).toBe(10);
  });
});
