// import App from '../src/App.js';
// import { MissionUtils } from '@woowacourse/mission-utils';

// const mockQuestions = (inputs) => {
//   MissionUtils.Console.readLineAsync = jest.fn();

//   MissionUtils.Console.readLineAsync.mockImplementation(() => {
//     const input = inputs.shift();

//     return Promise.resolve(input);
//   });
// };

// const mockRandoms = (numbers) => {
//   MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
//   numbers.reduce((acc, number) => {
//     return acc.mockReturnValueOnce(number);
//   }, MissionUtils.Random.pickUniqueNumbersInRange);
// };

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, 'print');
//   logSpy.mockClear();
//   return logSpy;
// };

// const runException = async (input) => {
//   const logSpy = getLogSpy();

//   const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
//   const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

//   mockRandoms([RANDOM_NUMBERS_TO_END]);
//   mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

//   const app = new App();
//   await app.run();

//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
// };

// const runExceptionWinningNumbers = async (input) => {
//   const logSpy = getLogSpy();

//   const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
//   const INPUT_NUMBERS_TO_END = [input, '7'];

//   mockRandoms([RANDOM_NUMBERS_TO_END]);
//   mockQuestions(['1000', ...INPUT_NUMBERS_TO_END]);

//   const app = new App();
//   await app.run();

//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
// };
// const runExceptionBonusNumber = async (input) => {
//   const logSpy = getLogSpy();

//   const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
//   const INPUT_NUMBERS_TO_END = ['1,2,3,4,5,6', input];

//   mockRandoms([RANDOM_NUMBERS_TO_END]);
//   mockQuestions(['1000', ...INPUT_NUMBERS_TO_END]);

//   const app = new App();
//   await app.run();

//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
// };

// describe('로또 테스트', () => {
//   beforeEach(() => {
//     jest.restoreAllMocks();
//   });

//   test('기능 테스트', async () => {
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

//     const app = new App();
//     await app.run();

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

//   test('구입 금액 예외 테스트 : [문자+숫자]', async () => {
//     await runException('1000j');
//   });
//   test('구입 금액 예외 테스트 : [문자열]', async () => {
//     await runException('abc');
//   });
//   test('구입 금액 예외 테스트 : [음수]', async () => {
//     await runException(-2000);
//   });
//   test('구입 금액 예외 테스트 : [1000원으로 나눠지지 않을 경우]', async () => {
//     await runException(1530);
//   });
//   test('구입 금액 예외 테스트 :  [빈칸일 경우]', async () => {
//     await runException('');
//   });
//   test('입력한 로또 번호 예외 테스트 : [번호가 숫자 범위 내에 있지 않는 경우]', async () => {
//     await runExceptionWinningNumbers('1,2,3,4,53,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [번호가 음수인 경우]', async () => {
//     await runExceptionWinningNumbers('1,2,-3,4,5,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [문자]]', async () => {
//     await runExceptionWinningNumbers('1,ㅁ,-3,4,5,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [문자열]]', async () => {
//     await runExceptionWinningNumbers('1,abc,-3,4,5,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [소수]]', async () => {
//     await runExceptionWinningNumbers('1,2.5,-3,4,5,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [빈칸]', async () => {
//     await runExceptionWinningNumbers('1,,-3,4,5,6');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [빈칸2]', async () => {
//     await runExceptionWinningNumbers('1,2,3,4,5,');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [6개가 아닌 경우]', async () => {
//     await runExceptionWinningNumbers('1,2,3,4,5');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [중복]', async () => {
//     await runExceptionWinningNumbers('1,2,2,4,5,');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [쉼표가 아닌 다른 문자가 있는 경우]', async () => {
//     await runExceptionWinningNumbers('1,2,2;4,5,');
//   });
//   test('입력한 로또 번호 예외 테스트 :  [빈칸일 경우]', async () => {
//     await runExceptionWinningNumbers('');
//   });
//   test('보너스 번호 예외 테스트 :  [범위 내 있지 않은 경우]', async () => {
//     await runExceptionBonusNumber(49);
//   });
//   test('보너스 번호 예외 테스트 :  [양수가 아닌 경우]', async () => {
//     await runExceptionBonusNumber(-4);
//   });
//   test('보너스 번호 예외 테스트 :  [당첨번호와 중복되는 경우]', async () => {
//     await runExceptionBonusNumber(1);
//   });
//   test('보너스 번호 예외 테스트 :  [번호가 1개 이상일 경우]', async () => {
//     await runExceptionBonusNumber('1,2');
//   });
//   test('보너스 번호 예외 테스트 :  [빈칸일 경우]', async () => {
//     await runExceptionBonusNumber('');
//   });
// });
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constants/errorMessage.js';

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
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

const runExceptionPurchaseCost = async (input, errorMessage) => {
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(`[ERROR] ${errorMessage}`);
};

const runExceptionWinningNumbers = async (input, errorMessage) => {
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = [input, '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions(['1000', ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(`[ERROR] ${errorMessage}`);
};
const runExceptionBonusNumber = async (input) => {
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1,2,3,4,5,6', input];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions(['1000', ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    const app = new App();
    await app.run();

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test(' 예외 테스트', async () => {
    await runException('1000j');
  });
});

describe('예외 테스트2', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([
    {
      case: 1,
      description: '[숫자+특수문자] 조합인 경우',
      input: '1000%',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 2,
      description: '문자열(영어)인 경우',
      input: 'abc',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 3,
      description: '문자열(한국어)인 경우',
      input: '테스트',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 4,
      description: '이모티콘인 경우',
      input: '😎',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 5,
      description: '음수인 경우',
      input: '-3000',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 6,
      description: '소수인 경우',
      input: '2.5',
      errorMessage: ERROR_MESSAGES.INVALID_POSITIVE_INTEGER,
    },
    {
      case: 6,
      description: '1000원으로 나누어지지 않는 경우',
      input: '1300',
      errorMessage: ERROR_MESSAGES.INVALID_COST_UNITS,
    },
    {
      case: 7,
      description: '빈칸인 경우',
      input: '',
      errorMessage: ERROR_MESSAGES.EMPTY_INPUT_FIELD,
    },
  ])(
    '구입 가격 예외 테스트 - [$case] $description',
    async ({ input, errorMessage }) => {
      await runExceptionPurchaseCost(input, errorMessage);
    },
  );

  test.each([
    {
      case: 1,
      description: '범위 내에 있지 않은 숫자 포함',
      input: '1,2,3,4,53,6',
      errorMessage: ERROR_MESSAGES.OUT_OF_BOUNDS_NUMBER_RANGE,
    },
    {
      case: 2,
      description: '음수 포함',
      input: '1,2,-3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 3,
      description: '문자(한국어) 포함',
      input: '1,ㅁ,3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 4,
      description: '문자열(한국어) 포함',
      input: '1,안녕,3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 5,
      description: '문자열(영어) 포함',
      input: '1,abc,-,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 6,
      description: '문자(영어) 포함',
      input: '1,a,3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 7,
      description: '이모티콘인 포함',
      input: '1,😎,3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 8,
      description: '소수 포함',
      input: '1,2.5,3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 9,
      description: '빈칸 포함',
      input: '1,,-3,4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 10,
      description: '로또 번호가 6개가 아닌 경우',
      input: '1,2,3,4,5',
      errorMessage: ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT,
    },
    {
      case: 11,
      description: '빈칸인 경우',
      input: '',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 12,
      description: '중복',
      input: '1,2,2,4,5,6',
      errorMessage: ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER,
    },
    {
      case: 13,
      description: '쉼표가 아닌 다른 문자 포함',
      input: '1,2,2;4,5,6',
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
  ])(
    '입력한 로또 번호 예외 테스트 - [$case] $description',
    async ({ input, errorMessage }) => {
      await runExceptionWinningNumbers(input, errorMessage);
    },
  );

  test('보너스 번호 예외 테스트 :  [범위 내 있지 않은 경우]', async () => {
    await runExceptionBonusNumber(49);
  });
  test('보너스 번호 예외 테스트 :  [양수가 아닌 경우]', async () => {
    await runExceptionBonusNumber(-4);
  });
  test('보너스 번호 예외 테스트 :  [당첨번호와 중복되는 경우]', async () => {
    await runExceptionBonusNumber(1);
  });
  test('보너스 번호 예외 테스트 :  [번호가 1개 이상일 경우]', async () => {
    await runExceptionBonusNumber('1,2');
  });
  test('보너스 번호 예외 테스트 :  [빈칸일 경우]', async () => {
    await runExceptionBonusNumber('');
  });
});
