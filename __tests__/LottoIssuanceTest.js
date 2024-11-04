import LottoIssuance from '../src/domain/LottoIssuance.js';
import { Random } from '@woowacourse/mission-utils';
import parser from '../src/utils/parser.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

jest.mock('../src/utils/parser.js', () => ({
  parseSortArray: jest.fn((array) => {
    return array.toSorted((a, b) => a - b);
  }),
  parseNumberWithCommas: jest.fn((number, options = {}) => {
    return number.toLocaleString('ko-KR', options);
  }),
}));

describe('로또 발행 클래스 테스트', () => {
  beforeEach(() => {
    parser.parseSortArray.mockClear();
    parser.parseNumberWithCommas.mockClear();
  });

  test('로또 구입 개수만큼 각 로또 번호를 발행하여 오름차순 정렬 후 2차원 배열로 반환한다.', () => {
    // given
    const lottoCount = 2;
    const mockRandoms = [
      [8, 15, 3, 25, 17, 10],
      [2, 18, 27, 30, 11, 20],
    ]

    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce(mockRandoms[0])
      .mockReturnValueOnce(mockRandoms[1]);
    
    // when
    const lottoIssuance = new LottoIssuance(lottoCount);
    const issuedLottos = lottoIssuance.getIssuedLottos();

    // then
    expect(issuedLottos).toEqual([
      [3, 8, 10, 15, 17, 25],
      [2, 11, 18, 20, 27, 30],
    ]);
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(lottoCount);
    expect(parser.parseSortArray).toHaveBeenCalledTimes(lottoCount)
  });
});
