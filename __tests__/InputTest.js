import { Console } from '@woowacourse/mission-utils';
import InputHandler from '../src/InputHandler.js';
import { ERROR_MESSAGE } from '../src/lib/constant.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('InputHandler 테스트', () => {
  test('구입금액 입력 테스트', async () => {
    const input = '5000';
    mockQuestions([input]);

    const buyPrice = await InputHandler.getBuyPrice();

    expect(buyPrice).toBe(input);
  });

  test('당첨번호 입력 테스트', async () => {
    const input = '1,2,3,4,5,6';
    mockQuestions([input]);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe(input);
  });

  test('보너스 번호 입력 테스트', async () => {
    const input = '7';
    mockQuestions([input]);

    const bonusNumber = await InputHandler.getBonusNumber('1,2,3,4,5,6');

    expect(bonusNumber).toBe(input);
  });
});

describe('구입 금액 예외처리 테스트', () => {
  test('구입금액 입력이 천원 단위가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['5500', '5000']);

    const buyPrice = await InputHandler.getBuyPrice();

    expect(buyPrice).toBe('5000');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.BUY_PRICE_UNIT),
    );
  });

  test('구입금액 입력이 숫자가 아닌 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['abc', '1000']);

    const buyPrice = await InputHandler.getBuyPrice();

    expect(buyPrice).toBe('1000');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.INPUT_TYPE),
    );
  });

  test('구입금액 입력이 자연수가 아닌 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['-10000', '1000']);

    const buyPrice = await InputHandler.getBuyPrice();

    expect(buyPrice).toBe('1000');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.NUMBER_POSITIVE),
    );
  });
});

describe('당첨 번호 예외처리 테스트', () => {
  test('당첨 번호 개수가 6개가 아닌 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5', '1,2,3,4,5,6']);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe('1,2,3,4,5,6');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.WINNING_NUMBER_COUNT),
    );
  });

  test('당첨 번호 입력이 숫자가 아닌 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,a,b,c', '1,2,3,4,5,6']);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe('1,2,3,4,5,6');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.INPUT_TYPE),
    );
  });

  test('당첨 번호 입력이 자연수가 아닌 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,-6', '1,2,3,4,5,6']);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe('1,2,3,4,5,6');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.NUMBER_POSITIVE),
    );
  });

  test('당첨 번호 범위가 틀린 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,48', '1,2,3,4,5,6']);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe('1,2,3,4,5,6');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.WINNING_NUMBER_RANGE),
    );
  });

  test('당첨 번호 중복된 번호가 있는 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,5', '1,2,3,4,5,6']);

    const winningNumbers = await InputHandler.getWinningNumbers();

    expect(winningNumbers).toBe('1,2,3,4,5,6');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE),
    );
  });

  test('보너스 번호가 당첨 번호와 중복된 경우', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['5', '7']);

    const bonusNumber = await InputHandler.getBonusNumber('1,2,3,4,5,6');

    expect(bonusNumber).toBe('7');
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE),
    );
  });
});
