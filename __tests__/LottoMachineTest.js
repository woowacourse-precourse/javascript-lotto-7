import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 머신 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('정확한 개수의 로또를 생성한다.', async () => {
    const expectedCount = 3;

    const mockLottoNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];

    mockRandoms(mockLottoNumbers);

    const lottos = LottoMachine.generateLottos(expectedCount);

    expect(lottos).toHaveLength(expectedCount);
    expect(lottos).toEqual(mockLottoNumbers);
  });
});
