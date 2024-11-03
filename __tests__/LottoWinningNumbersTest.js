import LottoWinningNumbers from '../src/models/LottoWinningNumbers.js';

describe('LottoWinningNumbers', () => {
  let lottoWinningNumbers;

  beforeEach(() => {
    jest.restoreAllMocks();
    lottoWinningNumbers = new LottoWinningNumbers();
  });
  test('setWinningNumbers() & getWinningNumbers()', () => {
    // given
    const mockWinningNumbers = [[2, 3, 5, 7, 8, 31]];

    // when
    lottoWinningNumbers.setWinningNumbers(mockWinningNumbers);

    // then
    expect(lottoWinningNumbers.getWinningNumbers()).toEqual(mockWinningNumbers);
  });

  test('setBonusNumber() & getBonusNumber()', () => {
    // given
    const mockBonusNumber = 23;

    // when
    lottoWinningNumbers.setBonusNumber(mockBonusNumber);

    // then
    expect(lottoWinningNumbers.getBonusNumber()).toBe(mockBonusNumber);
  });
});
