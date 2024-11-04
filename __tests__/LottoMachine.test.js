import LottoMachine from '../src/LottoMachine.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('LottoMachine 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 번호가 오름차순으로 정렬되어 생성된다', () => {
    const numbers = [6, 2, 4, 1, 5, 3];
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(numbers);

    const lotto = LottoMachine.createLotto();

    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 여러장 생성 시 지정된 개수만큼 생성된다', () => {
    const count = 3;
    const mockNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    mockNumbers.forEach((numbers) => {
      MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(numbers);
    });

    const lottos = LottoMachine.createLottos(count);

    expect(lottos).toHaveLength(count);
  });
});
