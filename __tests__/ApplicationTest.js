import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/lib/constants.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../src/lib/testUtils.js';

const runException = async (inputs, errorMessage) => {
  const logSpy = getLogSpy();

  const inputNumbersToEndStartIndex = inputs.length - 1;

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'].slice(
    inputNumbersToEndStartIndex,
    3,
  );

  mockRandoms([
    RANDOM_NUMBERS_TO_END,
    RANDOM_NUMBERS_TO_END,
    RANDOM_NUMBERS_TO_END,
    RANDOM_NUMBERS_TO_END,
    RANDOM_NUMBERS_TO_END,
  ]);
  mockQuestions([...inputs, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

const lottoTestCaseArray = [
  {
    mockRandomArray: [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ],
    mockQuestionArray: ['8000', '1,2,3,4,5,6', '7'],
    logArray: [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ],
  },
];

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('기능 테스트', () => {
    test.each(lottoTestCaseArray)(
      '$title',
      async ({ logArray, mockQuestionArray, mockRandomArray }) => {
        const logSpy = getLogSpy();

        mockRandoms(mockRandomArray);
        mockQuestions(mockQuestionArray);

        const app = new App();
        await app.run();

        logArray.forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
      },
    );
  });

  describe('예외 테스트', () => {
    describe('구입 금액', () => {
      test('숫자가 아닌 경우.', async () => {
        await runException(['1000j'], ERROR_MESSAGE.NOT_NUMERIC);
      });
      test('1,000원 단위가 아닌 경우.', async () => {
        await runException(['1010'], ERROR_MESSAGE.NOT_THOUSAND_UNIT);
      });
      test('양수가 아닌 경우.', async () => {
        await runException(['-1000'], ERROR_MESSAGE.NOT_POSITIVE);
      });
    });
    describe('당첨 번호', () => {
      test('6개의 숫자보다 적거나 많게 입력한 경우', async () => {
        await runException(['5000', '1,2,3'], ERROR_MESSAGE.NOT_SIX);
        await runException(['5000', '1,2,3,4,5,6,7,8'], ERROR_MESSAGE.NOT_SIX);
      });
      test('하나의 숫자라도 1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          ['5000', '1,2,3,4,5,90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          ['5000', '1,2,3,4,5,-10'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
      });
      test('중복된 숫자를 입력했을 경우', async () => {
        await runException(['5000', '1,2,3,4,5,5'], ERROR_MESSAGE.NOT_UNIQUE);
      });
    });
    describe('보너스 번호', () => {
      test('입력한 값이 숫자가 아닌 경우', async () => {
        await runException(
          ['5000', '1,2,3,4,5,6', 'a'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
        await runException(
          ['5000', '1,2,3,4,5,6', '\\'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
      });
      test('1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          ['5000', '1,2,3,4,5,6', '90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          ['5000', '1,2,3,4,5,6', '-10'],
          ERROR_MESSAGE.NOT_POSITIVE,
        );
      });
    });
  });
});
