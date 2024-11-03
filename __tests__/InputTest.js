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

    const bonusNumber = await InputHandler.getBonusNumber();

    expect(bonusNumber).toBe(input);
  });
});

describe('구입 금액 예외처리 테스트', () => {
  test('구입금액 입력이 천원 단위가 아닌 경우', async () => {
    const input = '5500';
    mockQuestions([input]);

    await expect(InputHandler.getBuyPrice()).rejects.toThrow(
      ERROR_MESSAGE.BUY_PRICE_UNIT,
    );
  });

  test('구입금액 입력이 숫자가 아닌 경우', async () => {
    const input = 'abc';
    mockQuestions([input]);

    await expect(InputHandler.getBuyPrice()).rejects.toThrow(
      ERROR_MESSAGE.BUY_PRICE_TYPE,
    );
  });

  test('구입금액 입력이 자연수가 아닌 경우', async () => {
    const input = '-10000';
    mockQuestions([input]);

    await expect(InputHandler.getBuyPrice()).rejects.toThrow(
      ERROR_MESSAGE.BUY_PRICE_POSITIVE,
    );
  });
});
