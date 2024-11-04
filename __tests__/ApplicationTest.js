import App from '../src/App';
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
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

// describe('로또 테스트', () => {
//   beforeEach(() => {
//     jest.restoreAllMocks();
//   });

//   test('기능 테스트', async () => {
//     // given
//     const logSpy = getLogSpy();

//     mockRandoms([
//       [8, 21, 23, 41, 42, 43],
//       [3, 5, 11, 16, 32, 38],
//       [7, 11, 16, 35, 36, 44],
//       [1, 8, 11, 31, 41, 42],
//       [13, 14, 16, 38, 42, 45],
//       [7, 11, 30, 40, 42, 43],
//       [2, 13, 22, 32, 38, 45],
//       [1, 3, 5, 14, 22, 45],
//     ]);
//     mockQuestions(['8000', '1,2,3,4,5,6', '7']);

//     // when
//     const app = new App();
//     await app.run();

//     // then
//     const logs = [
//       '8개를 구매했습니다.',
//       '[8, 21, 23, 41, 42, 43]',
//       '[3, 5, 11, 16, 32, 38]',
//       '[7, 11, 16, 35, 36, 44]',
//       '[1, 8, 11, 31, 41, 42]',
//       '[13, 14, 16, 38, 42, 45]',
//       '[7, 11, 30, 40, 42, 43]',
//       '[2, 13, 22, 32, 38, 45]',
//       '[1, 3, 5, 14, 22, 45]',
//       '3개 일치 (5,000원) - 1개',
//       '4개 일치 (50,000원) - 0개',
//       '5개 일치 (1,500,000원) - 0개',
//       '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
//       '6개 일치 (2,000,000,000원) - 0개',
//       '총 수익률은 62.5%입니다.',
//     ];

//     logs.forEach((log) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
//     });
//   });

//   test('예외 테스트', async () => {
//     await runException('1000j');
//   });
// });
// test('유효하지 않은 금액 입력 예외 처리 테스트', async () => {
//   await runException('1000j');
// });

// test('구매 금액이 1000원 단위가 아닐 때 예외 처리 테스트', async () => {
//   await runException('1500');
// });

// test('보너스 번호가 당첨 번호와 중복될 때 예외 처리 테스트', async () => {
//   const logSpy = getLogSpy();

//   mockRandoms([[8, 21, 23, 41, 42, 43]]);
//   mockQuestions(['1000', '1,2,3,4,5,6', '6']);

//   const app = new App();
//   await app.run();

//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.'));
// });

// test('구매 금액이 부족할 때 예외 처리 테스트', async () => {
//   await runException('500');
// });

test('정상적인 입력으로 여러 번 당첨된 경우 테스트', async () => {
  const logSpy = getLogSpy();

  mockRandoms([
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [13, 14, 16, 38, 42, 45],
    [1, 8, 11, 31, 41, 42],
    [7, 11, 30, 40, 42, 43],
    [1, 3, 5, 14, 22, 45],
  ]);
  mockQuestions(['8000', '1,2,3,4,5,6', '7']);

  const app = new App();
  await app.run();

  const expectedLogs = [
    '8개를 구매했습니다.',
    '[8, 21, 23, 41, 42, 43]',
    '[3, 5, 11, 16, 32, 38]',
    '[1, 2, 3, 4, 5, 6]',
    '[1, 2, 3, 4, 5, 6]',
    '[13, 14, 16, 38, 42, 45]',
    '[1, 8, 11, 31, 41, 42]',
    '[7, 11, 30, 40, 42, 43]',
    '[1, 3, 5, 14, 22, 45]',
    '3개 일치 (5,000원) - 1개',
    '4개 일치 (50,000원) - 0개',
    '5개 일치 (1,500,000원) - 0개',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
    '6개 일치 (2,000,000,000원) - 2개',
    '총 수익률은 2500000.0%입니다.',
  ];

  expectedLogs.forEach((expectedLog) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedLog));
  });
});
