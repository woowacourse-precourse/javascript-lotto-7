import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/models/LottoMachine.js';
import Lotto from '../src/models/Lotto.js';

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoMachine', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([
    { mockLottoNumbers: [[8, 21, 23, 41, 42, 43]], purchasePrice: 1000 },
    {
      mockLottoNumbers: [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      purchasePrice: 8000,
    },
    {
      mockLottoNumbers: [
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      purchasePrice: 5000,
    },
    {
      mockLottoNumbers: [
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [2, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
        [1, 9, 11, 31, 41, 42],
        [13, 15, 16, 38, 42, 45],
        [7, 11, 31, 40, 42, 43],
        [2, 13, 25, 32, 38, 45],
        [1, 3, 5, 17, 22, 45],
        [1, 8, 11, 31, 41, 43],
        [13, 14, 16, 39, 42, 45],
        [7, 10, 30, 40, 42, 43],
        [2, 12, 22, 32, 38, 45],
      ],
      purchasePrice: 14000,
    },
  ])('generateLottos()', ({ mockLottoNumbers, purchasePrice }) => {
    // given
    mockRandoms(mockLottoNumbers);

    // when
    const lottoMachine = new LottoMachine();
    const result = lottoMachine.generateLottos(purchasePrice);

    // then
    expect(result).toEqual(mockLottoNumbers.map(mock => new Lotto(mock)));
  });
});
