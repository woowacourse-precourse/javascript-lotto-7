import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/utils/Constants';
import WinningLottoManager from '../src/WinningLottoManager';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  inputs.reduce(
    (prevChain, input) => prevChain.mockResolvedValueOnce(input),
    Console.readLineAsync,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('WinningLottoManager 테스트', () => {
  const selectWinningNumbersSpy = jest.spyOn(
    WinningLottoManager,
    'selectWinningNumbers',
  );

  const selectBonusNumberSpy = jest.spyOn(
    WinningLottoManager,
    'selectBonusNumber',
  );

  beforeEach(() => {
    selectWinningNumbersSpy.mockClear();
    selectBonusNumberSpy.mockClear();
  });

  const testSelectWinningNumbers = async (inputs, expectedMessage) => {
    const VALID_NUMBERS = '1, 2, 3, 4, 5, 6';
    const ASKING_TIMES = 2;
    const logSpy = getLogSpy();

    mockQuestions([inputs, VALID_NUMBERS]);

    await WinningLottoManager.selectWinningNumbers(inputs);

    expect(selectWinningNumbersSpy).toHaveBeenCalledTimes(ASKING_TIMES);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  };

  const testSelectBonusNumber = async (inputs, expectedMessage) => {
    const VALID_NUMBER = '7';
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const ASKING_TIMES = 2;
    const logSpy = getLogSpy();

    mockQuestions([inputs, VALID_NUMBER]);

    await WinningLottoManager.selectBonusNumber(inputs, WINNING_NUMBERS);

    expect(selectBonusNumberSpy).toHaveBeenCalledTimes(ASKING_TIMES);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  };

  test.each([
    ['1, 2, 3, 4, 5, 숫자아님'],
    ['1, 2, null, 4, 5, 6'],
    ['1, 2, 3, 4, 5, undefined'],
    ['1, 2, 3, 4, $, 6'],
    ['번호, 2, 3, 4, 5, 6'],
  ])('숫자가 아닌 당첨 번호를 예외 처리하는지 테스트 (%s)', async (inputs) => {
    const errorMessage = ERROR_MESSAGE.notNumber;

    await testSelectWinningNumbers(inputs, errorMessage);
  });

  test.each([
    ['1, 2, 3, 4, 5, 46'],
    ['1, 2, 0, 4, 5, 6'],
    ['1, -1, 3, 4, 5, 6'],
    ['50, 2, 3, 4, 5, 6'],
    ['-777, 2, 3, 4, 5, 6'],
  ])(
    '지정 범위가 아닌 당첨 번호를 예외 처리하는지 테스트 (%s)',
    async (inputs) => {
      const errorMessage = ERROR_MESSAGE.notInRangeNumber;

      await testSelectWinningNumbers(inputs, errorMessage);
    },
  );

  test.each([
    ['1, 2, 3, 4, 5, 5.5'],
    ['1, 2, 3, 4, 6.7, 8.9'],
    ['1, 14.3, 3, 4, 5, 6'],
    ['44.17, 2, 3, 4, 5, 6'],
    ['7.7, 2, 3, 4, 5, 6'],
  ])('정수가 아닌 당첨 번호를 예외 처리하는지 테스트 (%s)', async (inputs) => {
    const errorMessage = ERROR_MESSAGE.notInteger;

    await testSelectWinningNumbers(inputs, errorMessage);
  });

  test.each([
    ['1, 2, 3, 4, 5, 6, 7'],
    ['1, 2, 3, 4, 5'],
    ['1, 2, 3, 4, 5, 6, 7, 8'],
  ])(
    '당첨 번호가 지정된 개수만큼 뽑히지 않았을때 예외 처리하는지 테스트 (%s)',
    async (inputs) => {
      const errorMessage = ERROR_MESSAGE.notValidNumberCount;

      await testSelectWinningNumbers(inputs, errorMessage);
    },
  );

  test.each([
    ['1, 2, 3, 4, 5, 5'],
    ['1, 2, 3, 3, 3, 3'],
    ['1, 2, 3, 3, 2, 1'],
    ['1, 1, 2, 3, 4, 5'],
  ])('당첨 번호가 중복이면 예외 처리하는지 테스트 (%s)', async (inputs) => {
    const errorMessage = ERROR_MESSAGE.isDuplicated;

    await testSelectWinningNumbers(inputs, errorMessage);
  });

  test.each([['숫자 아님'], ['!'], [' '], [''], ['7$']])(
    '숫자가 아닌 보너스 번호를 예외 처리하는지 테스트 (%s)',
    async (inputs) => {
      const errorMessage = ERROR_MESSAGE.notNumber;

      await testSelectBonusNumber(inputs, errorMessage);
    },
  );
});
