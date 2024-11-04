import LottoCount from '../src/domain/LottoCount.js';
import { COMMON_ERRORS, VALIDATION_ERRORS, LOTTO_PRICE_PER_TICKET } from '../src/constants/constants.js';
import parser from '../src/utils/parser.js';

const MOCK_LOTTO_PRICE_PER_TICKET = LOTTO_PRICE_PER_TICKET;

jest.mock('../src/utils/parser.js', () => ({
  parseMoneyToLottoCount: jest.fn((price) => {
    return price / MOCK_LOTTO_PRICE_PER_TICKET;
  }),
  parseNumberWithCommas: jest.fn((number, options = {}) => {
    return number.toLocaleString('ko-KR', options);
  }),
}));

describe('로또 구입 개수 클래스 테스트', () => {
  beforeEach(() => {
    parser.parseNumberWithCommas.mockClear();
    parser.parseMoneyToLottoCount.mockClear();
  });

  const exceptionTestCases = [
    ['로또 구입 금액이 숫자가 아닌 경우 예외가 발생한다.', 'a', COMMON_ERRORS.NUMBER],
    ['로또 구입 금액이 정수가 아닌 경우 예외가 발생한다.', 1_000.5, COMMON_ERRORS.INTEGER],
    ['로또 구입 금액 범위가 유효하지 않은 경우 예외가 발생한다.', -1_000, VALIDATION_ERRORS.PURCHASE_PRICE.RANGE],
    ['로또 구입 금액 범위가 유효하지 않은 경우 예외가 발생한다.', 20_000_000_000, VALIDATION_ERRORS.PURCHASE_PRICE.RANGE],
    ['로또 구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.', 1_001, VALIDATION_ERRORS.PURCHASE_PRICE.THOUSAND],
  ];

  it.each(exceptionTestCases)('%s', (_, lottoPurchasePrice, errorMessage) => {
      expect(() => new LottoCount(lottoPurchasePrice)).toThrow(errorMessage);
  });

  test('로또 구입 금액이 올바른 경우 로또 구입 개수로 파싱하여 getLottoCount()를 통해 로또 구입 개수를 반환한다.', () => {
    // given
    const lottoPurchasePrice = 8_000;
    const expectedLottoCount = 8;

    parser.parseMoneyToLottoCount.mockReturnValue(expectedLottoCount);
    
    // when
    const lottoCount = new LottoCount(lottoPurchasePrice);
    const result = lottoCount.getLottoCount();

    // then
    expect(result).toBe(expectedLottoCount);
    expect(parser.parseMoneyToLottoCount).toHaveBeenCalledWith(lottoPurchasePrice);
  });
});
