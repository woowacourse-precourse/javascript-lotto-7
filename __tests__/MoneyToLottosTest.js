import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/model/Lotto.js';
import MoneyToLottos from '../src/controller/MoneyToLottos.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('MoneyToLottos 테스트', () => {
  let moneyToLottos;
  const purchaseAmount = 3000;

  beforeEach(() => {
    moneyToLottos = new MoneyToLottos(purchaseAmount);
  });

  test('구입한 금액 만큼 로또 생성 확인', () => {
    const lottoTickets = moneyToLottos.generateLottoTickets();

    expect(lottoTickets).toHaveLength(purchaseAmount / 1000);
    lottoTickets.forEach((ticket) => {
      expect(ticket).toBeInstanceOf(Lotto);
    });
  });

  test('정렬된 로또 번호를 생성하는지 확인', () => {
    const RANDOM_NUMBERS = [3, 1, 4, 2, 5, 6];
    mockRandoms([RANDOM_NUMBERS]);
    const numbers = moneyToLottos.generateLottoNumbers();

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
