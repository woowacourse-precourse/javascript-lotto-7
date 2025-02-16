import LottoMatcher from '../src/classes/LottoMatcher';

describe('LottoMatcher', () => {
  let mockLottoCalculator;
  let winningNumber;

  beforeEach(() => {
    mockLottoCalculator = {
      calculateLottoRank: jest.fn(),
      getLottoResults: jest.fn(),
    };
    winningNumber = [1, 2, 3, 4, 5, 6];
  });

  describe('matchLotto', () => {
    test('로또 번호 6개 일치하는 경우', () => {
      const myLottos = [[1, 2, 3, 4, 5, 6]];
      const bonusNumber = 7;
      const expectedResults = [0, 0, 0, 0, 0, 1];

      mockLottoCalculator.getLottoResults.mockReturnValue(expectedResults);

      const lottoMatcher = new LottoMatcher(
        myLottos,
        winningNumber,
        bonusNumber,
        mockLottoCalculator
      );

      const results = lottoMatcher.matchLotto();

      expect(mockLottoCalculator.calculateLottoRank).toHaveBeenCalledWith(
        6,
        0,
        [false]
      );
      expect(results).toEqual(expectedResults);
    });

    test('로또 번호 5개 + 보너스 번호 일치하는 경우', () => {
      const myLottos = [[1, 2, 3, 4, 5, 7]];
      const bonusNumber = 7;
      const expectedResults = [0, 0, 0, 0, 1, 0];

      mockLottoCalculator.getLottoResults.mockReturnValue(expectedResults);

      const lottoMatcher = new LottoMatcher(
        myLottos,
        winningNumber,
        bonusNumber,
        mockLottoCalculator
      );

      const results = lottoMatcher.matchLotto();

      expect(mockLottoCalculator.calculateLottoRank).toHaveBeenCalledWith(
        5,
        0,
        [true]
      );
      expect(results).toEqual(expectedResults);
    });

    test('로또 번호 5개만 일치하는 경우', () => {
      const myLottos = [[1, 2, 3, 4, 5, 8]];

      const bonusNumber = 7;
      const expectedResults = [0, 0, 1, 0, 0];

      mockLottoCalculator.getLottoResults.mockReturnValue(expectedResults);

      const lottoMatcher = new LottoMatcher(
        myLottos,
        winningNumber,
        bonusNumber,
        mockLottoCalculator
      );

      const results = lottoMatcher.matchLotto();

      expect(mockLottoCalculator.calculateLottoRank).toHaveBeenCalledWith(
        5,
        0,
        [false]
      );
      expect(results).toEqual(expectedResults);
    });

    test('일치하는 번호가 없는 경우', () => {
      const myLottos = [[7, 8, 9, 10, 11, 12]];
      const bonusNumber = 13;
      const expectedResults = [0, 0, 0, 0, 0];

      mockLottoCalculator.getLottoResults.mockReturnValue(expectedResults);

      const lottoMatcher = new LottoMatcher(
        myLottos,
        winningNumber,
        bonusNumber,
        mockLottoCalculator
      );

      const results = lottoMatcher.matchLotto();

      expect(mockLottoCalculator.calculateLottoRank).toHaveBeenCalledWith(
        0,
        0,
        [false]
      );
      expect(results).toEqual(expectedResults);
    });
  });
});
