import { Random } from '@woowacourse/mission-utils';
import LottoGenerator from '../src/components/Lotto/LottoGenerator.js'; // 함수 이름이 없는 default export이므로 이름을 지정해줍니다.
import RULES from '../src/resources/RULES.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe('Lotto 생성 함수 테스트', () => {
  beforeEach(() => {
    Random.pickUniqueNumbersInRange.mockImplementation(() => [
      1, 2, 3, 4, 5, 6,
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('inputMoney에 따른 Lotto 객체 수 생성 확인', () => {
    const inputMoney = 3000;
    const lottoList = LottoGenerator(inputMoney);

    expect(lottoList.length).toBe(parseInt(inputMoney / RULES.LOTTO_PRICE));
  });

  test('각 Lotto 객체가 갖는 번호가 올바른 범위와 개수를 만족하는지 확인', () => {
    const inputMoney = 1000;
    const lottoList = LottoGenerator(inputMoney);

    lottoList.forEach((lotto) => {
      expect(lotto.getNumbers().length).toBe(RULES.TOTAL_PICK_COUNT);
      lotto.getNumbers().forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(RULES.PICK_RANGE_START);
        expect(number).toBeLessThanOrEqual(RULES.LOTTO_PRICE);
      });
    });
  });
});
