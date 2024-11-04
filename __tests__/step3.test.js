import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('3단계 - 당첨 번호 입력', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('정상적인 당첨 번호 입력 처리', async () => {
    const inputs = ['8000', '1,2,3,4,5,6', '7'];
    const logSpy = getLogSpy();
    mockRandomsAndInputs(inputs);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('8개를 구매했습니다.')
    );
  });

  test('잘못된 형식의 당첨 번호 입력 시 예외 발생', async () => {
    const inputs = ['8000', '1,2,3,4,5,a', '7'];
    mockRandomsAndInputs(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

const mockRandomsAndInputs = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  inputs.forEach((input) => {
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);
  });

  const mockLottoNumbers = Array.from({ length: 8 }, () => [1, 2, 3, 4, 5, 6]);
  mockRandoms(mockLottoNumbers);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.forEach((nums) => {
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(nums);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
