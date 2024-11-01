import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/lib/constants.js';
import MOCKDATA from '../src/lib/mock/data.js';
import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from '../src/lib/mock/utils.js';

const runException = async (inputs, errorMessage) => {
  const logSpy = getLogSpy();

  const inputNumbersToEndStartIndex = inputs.length - 1;

  const INPUT_NUMBERS_TO_END = [
    MOCKDATA.INPUT.PURCHASE_PRICE,
    MOCKDATA.INPUT.WINNING_NUMBERS,
    MOCKDATA.INPUT.BONUS_MUMBER,
  ].slice(inputNumbersToEndStartIndex, 3);

  mockRandoms(MOCKDATA.RANDOM.LOTTO_NUMBERS);
  mockQuestions([...inputs, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('App', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('정상 케이스', () => {
    describe('올바른 데이터를 입력했을 때의 상황을 테스트한다.', () => {
      test('모킹 데이터', async () => {
        const logSpy = getLogSpy();

        mockRandoms(MOCKDATA.RANDOM.LOTTO_NUMBERS);
        mockQuestions(Object.values(MOCKDATA.INPUT).flat());

        const app = new App();
        await app.run();

        Object.values(MOCKDATA.OUTPUT)
          .flat()
          .forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
          });
      });
    });
  });

  describe('예외 케이스', () => {
    describe('입력된 구입 금액이 올바르지 않은 경우 예외를 처리한다.', () => {
      test('숫자가 아닌 경우', async () => {
        await runException(['1000j'], ERROR_MESSAGE.NOT_NUMERIC);
      });
      test('1,000원 단위가 아닌 경우', async () => {
        await runException(['1010'], ERROR_MESSAGE.NOT_THOUSAND_UNIT);
      });
      test('양수가 아닌 경우', async () => {
        await runException(['-1000'], ERROR_MESSAGE.NOT_POSITIVE);
      });
    });

    describe('입력된 당첨 번호가 올바르지 않은 경우 예외를 처리한다.', () => {
      test('6개의 숫자보다 적거나 많게 입력한 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, '1,2,3'],
          ERROR_MESSAGE.NOT_SIX,
        );
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, '1,2,3,4,5,6,7,8'],
          ERROR_MESSAGE.NOT_SIX,
        );
      });
      test('하나의 숫자라도 1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, '1,2,3,4,5,90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, '1,2,3,4,5,-10'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
      });
      test('중복된 숫자를 입력했을 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, '1,2,3,4,5,5'],
          ERROR_MESSAGE.NOT_UNIQUE,
        );
      });
    });

    describe('입력된 보너스 번호가 올바르지 않은 경우 예외를 처리한다.', () => {
      test('입력한 값이 숫자가 아닌 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, MOCKDATA.INPUT.WINNING_NUMBERS, 'a'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, MOCKDATA.INPUT.WINNING_NUMBERS, '\\'],
          ERROR_MESSAGE.NOT_NUMERIC,
        );
      });
      test('1~45 사이의 숫자가 아닌 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, MOCKDATA.INPUT.WINNING_NUMBERS, '90'],
          ERROR_MESSAGE.NOT_BETWEEN_1_AND_45,
        );
        await runException(
          [
            MOCKDATA.INPUT.PURCHASE_PRICE,
            MOCKDATA.INPUT.WINNING_NUMBERS,
            '-10',
          ],
          ERROR_MESSAGE.NOT_POSITIVE,
        );
      });
      test('로또 번호와 중복되는 번호가 있는 경우', async () => {
        await runException(
          [MOCKDATA.INPUT.PURCHASE_PRICE, MOCKDATA.INPUT.WINNING_NUMBERS, '6'],
          ERROR_MESSAGE.NOT_UNIQUE,
        );
      });
    });
  });
});
