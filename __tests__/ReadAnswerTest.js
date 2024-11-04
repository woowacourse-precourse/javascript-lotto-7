import { ERROR_MESSAGES } from '../src/constants/Messages.js';
import { getLogSpy, mockQuestions } from '../src/mock/testUtils.js';
import App from '../src/App.js';

describe('', () => {
  const VALID_AMOUNT = '1000';
  const VALID_LOTTO_NUMBER = '1,2,3,4,5,6';
  const VALID_BONUS_NUMBER = '7';
  test.each([
    ['이천원', ERROR_MESSAGES.integerGreaterThenZero],
    ['1000.1', ERROR_MESSAGES.integerGreaterThenZero],
    ['2500', ERROR_MESSAGES.divideIntoUnit],
  ])('잘못된 구매금액 입력 테스트 ( 입력 : %s 에러메시지 : %s )', async (amount, errorMessage) => {
    // when
    const logSpy = getLogSpy();
    mockQuestions([amount, VALID_AMOUNT, VALID_LOTTO_NUMBER, VALID_BONUS_NUMBER]);
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(errorMessage);
  });
  test.each([
    ['1, 2, 3, 4, 5 ,6', ERROR_MESSAGES.invalidNumberFormat],
    ['1,2,3.5,4,5,6', ERROR_MESSAGES.invalidRangeNumber],
    ['1,2,3,4,5,46', ERROR_MESSAGES.invalidRangeNumber],
    ['1,2,3,4,5,5', ERROR_MESSAGES.duplicatedWinningNumber],
  ])('잘못된 당첨번호 입력 테스트 ( 입력 : %s 에러메시지 : %s )', async (input, errorMessage) => {
    // when
    const logSpy = getLogSpy();
    mockQuestions([VALID_AMOUNT, input, VALID_LOTTO_NUMBER, VALID_BONUS_NUMBER]);
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(errorMessage);
  });

  test.only.each([
    ['1.2', ERROR_MESSAGES.invalidRangeNumber],
    ['6', ERROR_MESSAGES.duplicatedBonusNumber],
    ['7,8', ERROR_MESSAGES.invalidBonusNumberLength],
  ])(
    '잘못된 보너스 번호 입력 테스트 ( 입력 : %s 에러메시지 : %s )',
    async (input, errorMessage) => {
      // when
      const logSpy = getLogSpy();
      mockQuestions([VALID_AMOUNT, VALID_LOTTO_NUMBER, input, VALID_BONUS_NUMBER]);
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(errorMessage);
    },
  );
});
