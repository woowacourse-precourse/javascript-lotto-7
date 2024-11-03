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
});
