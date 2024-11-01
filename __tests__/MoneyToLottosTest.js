import { MissionUtils } from '@woowacourse/mission-utils';
import MoneyToLottos from '../src/MoneyToLottos.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('MoneyToLottos 테스트', () => {
  test('정렬된 로또 번호를 생성하는지 확인', () => {
    const purchaseAmount = 3000;
    const moneyToLottos = new MoneyToLottos(purchaseAmount);
    const RANDOM_NUMBERS = [3, 1, 4, 2, 5, 6];
    mockRandoms([RANDOM_NUMBERS]);
    const numbers = moneyToLottos.generateLottoNumbers();

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
