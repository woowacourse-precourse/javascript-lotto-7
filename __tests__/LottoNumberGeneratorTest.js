import LottoNumberGenerator from '../src/services/LottoNumberGenerator.js';
import LottoRepository from '../src/models/LottoRepository.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoNumberGenerator 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 번호 생성과 저장 기능 테스트', () => {
    const repository = new LottoRepository();
    const generator = new LottoNumberGenerator('5000');

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 3, 10, 14, 20, 45],
      [3, 10, 11, 22, 44, 45],
      [10, 11, 12, 13, 14, 15],
      [11, 19, 22, 33, 44, 45],
    ]);

    generator.generateLotto(repository);
    const lottoArray = repository.getLottoArray();

    expect(lottoArray).toHaveLength(5);
    expect(lottoArray[0].getLotto()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottoArray[1].getLotto()).toEqual([1, 3, 10, 14, 20, 45]);
    expect(lottoArray[2].getLotto()).toEqual([3, 10, 11, 22, 44, 45]);
    expect(lottoArray[3].getLotto()).toEqual([10, 11, 12, 13, 14, 15]);
    expect(lottoArray[4].getLotto()).toEqual([11, 19, 22, 33, 44, 45]);
  });
});
