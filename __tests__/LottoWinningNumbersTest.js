import Lotto from '../src/models/Lotto';
import LottoWinningNumbers from '../src/models/LottoWinningNumbers';

describe('LottoWinningNumbers', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('setLottos() & getLottos()', () => {
    // given
    const mockWinningNumbers = [[2, 3, 5, 7, 8, 31]];
    const lottoWinningNumbers = new LottoWinningNumbers();

    // when
    lottoWinningNumbers.setWinningNumbers(mockWinningNumbers);

    // then
    expect(lottoWinningNumbers.getWinningNumbers()).toEqual(mockWinningNumbers);
  });
});
