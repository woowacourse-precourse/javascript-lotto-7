import { Random } from '@woowacourse/mission-utils';
import LotteryFactory from '../src/Factory/LotteryFactory.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

class MockLotto {
  constructor(numbers) {
    this.numbers = numbers;
  }
}

describe('LotteryFactory', () => {
  const factorySettings = {
    randomRangeValue: {
      minimumRangeValue: 1,
      maximumRangeValue: 45,
      pickingNumber: 6,
    },
  };

  let lotteryFactory;

  beforeEach(() => {
    lotteryFactory = new LotteryFactory(MockLotto, factorySettings);
    Random.pickUniqueNumbersInRange.mockImplementation(() =>
      [5, 12, 23, 34, 42, 45].sort((a, b) => a - b),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('올바르게 맞는 장수의 로또를 만들어야 한다.', () => {
    const lotteryNotes = 5;
    const lotteries = lotteryFactory.createLotteries(lotteryNotes);

    expect(lotteries).toHaveLength(lotteryNotes);
  });
  it('올바르게 맞는 장수의 로또를 만들어야 한다.', () => {
    const lotteryNotes = 100;
    const lotteries = lotteryFactory.createLotteries(lotteryNotes);

    expect(lotteries).toHaveLength(lotteryNotes);
  });

  it('로또는 sorting이 완료 된 상태여야 한다.', () => {
    const lotteryNotes = 5;
    const lotteries = lotteryFactory.createLotteries(lotteryNotes);

    lotteries.forEach((lotto) => {
      expect(lotto.numbers).toEqual([...lotto.numbers].sort((a, b) => a - b));
    });
  });
});
