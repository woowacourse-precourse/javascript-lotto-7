import LottoIssuer from '../src/classes/LottoIssuer.js';
import Lotto from '../src/classes/Lotto.js';
import { Random } from '@woowacourse/mission-utils';

describe('LottoIssuer 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('정상적인 로또 번호가 생성된다.', () => {
    const purchaseAmount = 3000;
    const mockNumbers = [3, 11, 24, 35, 42, 44];

    jest.spyOn(Random, 'pickUniqueNumbersInRange').mockReturnValue(mockNumbers);

    const lottos = LottoIssuer.generateLottos(purchaseAmount);

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumbers()).toEqual(mockNumbers);
    });
  });

  test('구입 금액이 0일 경우 빈 배열을 반환한다.', () => {
    const purchaseAmount = 0;
    const lottos = LottoIssuer.generateLottos(purchaseAmount);

    expect(lottos).toHaveLength(0);
  });

  test('구입 금액에 따라 정확한 개수의 로또가 생성된다.', () => {
    const purchaseAmount = 5000;
    const expectedCount = purchaseAmount / LottoIssuer.LOTTO_PRICE;

    const mockNumbers = [1, 2, 3, 4, 5, 6];
    jest.spyOn(Random, 'pickUniqueNumbersInRange').mockReturnValue(mockNumbers);

    const lottos = LottoIssuer.generateLottos(purchaseAmount);

    expect(lottos).toHaveLength(expectedCount);
  });
});
