import Controller from '../src/controller/Controller.js';
import { mockQuestions } from '../src/utils/test/testUtils.js';
import { ERROR_MESSAGES } from '../src/constant/constants';

describe('잘못된 입력 시 재입력 후 올바른 값 반환 테스트', () => {
  test('구매 금액을 잘못 입력했을 때 재입력 후 올바른 입력 시 입력값을 반환한다.', async () => {
    // given
    const INVALID_MONEY = 50;
    const VALID_MONEY = 1000;

    mockQuestions([INVALID_MONEY, VALID_MONEY]);

    // when
    const controller = new Controller();
    const printErrorSpy = jest.spyOn(controller.outputView, 'printError');
    const result = await controller.getMoney();

    // then
    expect(printErrorSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT,
    );
    expect(result).toBe(VALID_MONEY);
  });

  test('구매 금액을 3번 잘못 입력했을 때 재입력 후 올바른 입력 시 입력값을 반환한다.', async () => {
    // given
    const INVALID_MONEY = 50;
    const VALID_MONEY = 1000;

    mockQuestions([INVALID_MONEY, INVALID_MONEY, INVALID_MONEY, VALID_MONEY]);

    // when
    const controller = new Controller();
    const printErrorSpy = jest.spyOn(controller.outputView, 'printError');
    const result = await controller.getMoney();

    // then
    expect(printErrorSpy).toHaveBeenCalledTimes(3);
    expect(printErrorSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT,
    );
    expect(result).toBe(VALID_MONEY);
  });

  test('당첨 번호를 잘못 입력했을 때 재입력 후 올바른 입력 시 입력값을 반환한다.', async () => {
    // given
    const INVALID_WINNING_NUMBER = '1,2';
    const VALID_WINNING_NUMBER = '1,2,3,4,5,6';

    mockQuestions([INVALID_WINNING_NUMBER, VALID_WINNING_NUMBER]);

    // when
    const controller = new Controller();
    const printErrorSpy = jest.spyOn(controller.outputView, 'printError');
    const result = await controller.getWinningNumber();

    // then
    expect(printErrorSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.WINNING_NUMBER.INVALID_COUNT,
    );
    expect(result).toBe(VALID_WINNING_NUMBER);
  });

  test('보너스 번호를 잘못 입력했을 때 재입력 후 올바른 입력 시 입력값을 반환한다.', async () => {
    // given
    const WINNING_NUMBER = '1,2,3,4,5,6';
    const INVALID_BONUS_NUMBER = 1;
    const VALID_BONUS_NUMBER = 7;

    mockQuestions([INVALID_BONUS_NUMBER, VALID_BONUS_NUMBER]);

    // when
    const controller = new Controller();
    const printErrorSpy = jest.spyOn(controller.outputView, 'printError');
    const result = await controller.getBonusNumber(WINNING_NUMBER);

    // then
    expect(printErrorSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER,
    );
    expect(result).toBe(VALID_BONUS_NUMBER);
  });
});
