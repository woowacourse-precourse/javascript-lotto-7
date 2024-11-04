import LottoResult from '../src/LottoResult.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const INPUT_NUMBERS_TO_END = ['1,2,3,4,5,6', '7'];
  const RAMDOM_LOTTOS = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];

  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const lottoResult = new LottoResult(RAMDOM_LOTTOS);
  await lottoResult.lottoResult();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 결과 클래스 예외 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', async () => {
    await runException('1,2,3,4,5,6,7', '7');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', async () => {
    await runException('1,2,3,4,5,5', '7');
  });

  test('로또 번호에 45 초과의 숫자가 있으면 예외가 발생한다.', async () => {
    await runException('1,2,3,4,5,46', '7');
  });

  test('로또 번호에 1 미만의 숫자가 있으면 예외가 발생한다.', async () => {
    await runException('0,2,3,4,5,5', '7');
  });
});
