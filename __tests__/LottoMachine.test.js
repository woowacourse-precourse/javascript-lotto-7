import LottoMachine from '../src/LottoMachine';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoMachine', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('올바른 구입 금액으로 로또 개수를 계산하고 구매한다.', async () => {
    const logSpy = getLogSpy();
    const lottoMachine = new LottoMachine();

    mockQuestions(['3000']);
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ]);

    const purchaseAmount = await lottoMachine.readPurchaseAmount();
    const purchasedLottos = lottoMachine.purchaseLottos(purchaseAmount);

    expect(purchasedLottos).toHaveLength(3);

    expect(logSpy).toHaveBeenCalledWith('3개를 구매했습니다.');
    expect(logSpy).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]');
    expect(logSpy).toHaveBeenCalledWith('[7, 8, 9, 10, 11, 12]');
    expect(logSpy).toHaveBeenCalledWith('[13, 14, 15, 16, 17, 18]');
  });
});
