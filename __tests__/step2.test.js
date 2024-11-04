import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('2단계 - 로또 발급 기능', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 구매 시 발행된 로또 수량과 번호가 출력된다', async () => {
    const input = '5000';
    const logSpy = getLogSpy();
    const mockLottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
    ];

    mockRandoms(mockLottoNumbers);
    mockReadLineAsync(input);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith('5개를 구매했습니다.');
    mockLottoNumbers.forEach((numbers) => {
      expect(logSpy).toHaveBeenCalledWith(`[${numbers.join(', ')}]`);
    });
  });
});

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);
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
