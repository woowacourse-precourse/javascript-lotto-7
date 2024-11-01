import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/lib/constants.js';
import { MOCK } from '../src/lib/mock/datas.js';
import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from '../src/lib/mock/utils.js';

const runException = async (inputs, errorMessage) => {
  const logSpy = getLogSpy();

  const inputNumbersToEndStartIndex = inputs.length - 1;

  const INPUT_NUMBERS_TO_END = [
    MOCK.INPUT.PURCHASE_PRICE,
    MOCK.INPUT.WINNING_NUMBERS,
    MOCK.INPUT.BONUS_MUMBER,
  ].slice(inputNumbersToEndStartIndex, 3);

  mockRandoms(MOCK.RANDOM.LOTTO_NUMBERS);
  mockQuestions([...inputs, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('기능 테스트', () => {
    test('Mock 데이터', async () => {
      const logSpy = getLogSpy();

      mockRandoms(MOCK.RANDOM.LOTTO_NUMBERS);
      mockQuestions(Object.values(MOCK.INPUT).flat());

      const app = new App();
      await app.run();

      Object.values(MOCK.OUTPUT)
        .flat()
        .forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
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
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, '1,2,3'],
          ERROR_MESSAGE.NOT_SIX,
        );
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, '1,2,3,4,5,6,7,8'],
          ERROR_MESSAGE.NOT_SIX,
        );
      });
      test('하나의 숫자라도 1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, '1,2,3,4,5,90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, '1,2,3,4,5,-10'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
      });
      test('중복된 숫자를 입력했을 경우', async () => {
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, '1,2,3,4,5,5'],
          ERROR_MESSAGE.NOT_UNIQUE,
        );
      });
    });

    describe('보너스 번호', () => {
      test('입력한 값이 숫자가 아닌 경우', async () => {
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, MOCK.INPUT.WINNING_NUMBERS, 'a'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, MOCK.INPUT.WINNING_NUMBERS, '\\'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
      });
      test('1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, MOCK.INPUT.WINNING_NUMBERS, '90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, MOCK.INPUT.WINNING_NUMBERS, '-10'],
          ERROR_MESSAGE.NOT_POSITIVE,
        );
      });
      test('로또 번호와 중복되는 번호가 있는 경우', async () => {
        await runException(
          [MOCK.INPUT.PURCHASE_PRICE, MOCK.INPUT.WINNING_NUMBERS, '6'],
          ERROR_MESSAGE.NOT_UNIQUE,
        );
      });
    });
  });
});
