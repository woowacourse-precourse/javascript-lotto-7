import { mockRandoms } from '../src/mock/testUtils.js';
import LottoStore from '../src/LottoStore.js';

describe('LottoStore 테스트', () => {
  test('로또 번호 생성 테스트', () => {
    const RANDOMS = [[45, 3, 16, 2, 1, 7]];
    const LOTTO = [[1, 2, 3, 7, 16, 45]];
    const AMOUNT = '1000';
    mockRandoms(RANDOMS);

    const lottoStore = new LottoStore(AMOUNT);

    expect(lottoStore.getLottoNumbers()).toEqual(LOTTO);
  });
  test('로또 추첨 결과 기능 테스트', () => {
    // given
    const RANDOMS = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
    ];
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = [7];
    const AMOUNT = '8000';
    const EXPECTED_RESULT = {
      first: 1,
      second: 1,
      third: 1,
      fourth: 1,
      fifth: 1,
    };

    // when
    mockRandoms(RANDOMS);
    const lottoStore = new LottoStore(AMOUNT);

    // then
    expect(lottoStore.getLottoResult(WINNING_NUMBERS, BONUS_NUMBER)).toEqual(EXPECTED_RESULT);
  });
});
