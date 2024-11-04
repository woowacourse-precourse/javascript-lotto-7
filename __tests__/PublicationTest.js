import Lotto from '../src/Lotto.js';
import LottoPublication from '../src/LottoPublication.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 발행 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 발행 시 서로 중복되지 않는 6개의 숫자가 오름차순으로 정렬되어 Lotto객체를 생성해 리스트에 push한다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const lottoPublication = new LottoPublication();

    lottoPublication.publicationLotto('3');
    expect(lottoPublication.getPublishedLottoList()).toStrictEqual([
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
    ]);
  });
});