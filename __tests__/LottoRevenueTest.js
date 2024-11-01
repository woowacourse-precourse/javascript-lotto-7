import LottoRevenue from '../src/domain/LottoRevenue.js';
import { MATCH_CODE } from '../src/constants/constants.js';
import parser from '../src/utils/parser.js';

jest.mock('../src/utils/parser.js', () => ({
  parseNumberWithCommas: jest.fn((number, options = {}) => {
    return number.toLocaleString('ko-KR', options);
  }),
}));

describe('수익률 클래스 테스트', () => {
  beforeEach(() => {
    parser.parseNumberWithCommas.mockClear();
  });

  test('로또 구입 금액과 로또 당첨 내역에 따라 수익률을 계산하여 반환한다.', () => {
    // given
    const lottoCount = 8;
    const matchResults = new Map([
      [MATCH_CODE.THREE, 1],
      [MATCH_CODE.FOUR, 0],
      [MATCH_CODE.FIVE, 0],
      [MATCH_CODE.FIVE_WITH_BONUS, 0],
      [MATCH_CODE.SIX, 0],
    ]);
    const expectedRevenue = '62.5';

    // when
    const lottoRevenue = new LottoRevenue(lottoCount, matchResults);
    const result = lottoRevenue.getRevenue();

    // then
    expect(result).toBe(expectedRevenue);
  });
});
