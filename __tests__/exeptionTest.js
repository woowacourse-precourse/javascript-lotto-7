import App from '../src/App.js';
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

const runException = async (input) => {
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions(input);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('입력 예외 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('구매 입력 예외 - 숫자가 아닌 입력', async () => {
    await runException(['1000j', '1000', '1,2,3,4,5,6', '7']);
  });
  test('구매 입력 예외 - 1000으로 나누어 떨어지지 않는 입력', async () => {
    await runException(['900', '1000', '1,2,3,4,5,6', '7']);
  });

  test('당첨 번호 입력 예외 - 입력 숫자가 6개가 아닌 경우', async () => {
    await runException(['1000', '1,2,3,4,5', '1,2,3,4,5,6', '7']);
  });
  test('당첨 번호 입력 예외 - 입력 숫자에 중복이 있는 경우', async () => {
    await runException(['1000', '1,2,3,4,5,5', '1,2,3,4,5,6', '7']);
  });
  test('당첨 번호 입력 예외 - 입력에 숫자가 아닌 것이 있는 경우', async () => {
    await runException(['1000', '1,2,3,4,5,a', '1,2,3,4,5,6', '7']);
  });
  test('당첨 번호 입력 예외 - 입력에 범위 밖의 숫자가 있는 경우', async () => {
    await runException(['1000', '0,2,3,4,5,6', '1,2,3,4,5,6', '7']);
  });
  test('당첨 번호 입력 예외 - 입력에 정수가 아닌 것이 있는 경우', async () => {
    await runException(['1000', '1.5,2,3,4,5,6', '1,2,3,4,5,6', '7']);
  });

  test('보너스 번호 입력 예외 - 입력이 숫자가 아닌 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', 'a', '7']);
  });
  test('보너스 번호 입력 예외 - 입력이 정수가 아닌 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', '7.5', '7']);
  });
  test('보너스 번호 입력 예외 - 입력이 1등 당첨 번호에 포함된 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', '6', '7']);
  });
});
