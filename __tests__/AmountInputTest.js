import {
  amountInputErrorTestCase,
  amountInputSuccessTestCase,
} from '../src/constant/testCases/amountInputTestCase.js';
import App from '../src/App.js';
import { inputAmount } from '../src/utils/inputService.js';
import { outputPayment } from '../src/utils/outputService.js';
import { getLogSpy, mockQuestions } from './ApplicationTest.js';

describe('구매 금액 입력 테스트', () => {
  test.each(amountInputErrorTestCase)(
    '$description 예외가 발생한다.',
    async ({ amount, errorMessage }) => {
      // given
      const logSpy = getLogSpy();

      const AMOUNT_INPUT = `${amount}`;

      mockQuestions([AMOUNT_INPUT]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
    }
  );

  test.each(amountInputSuccessTestCase)(
    '$description $expected를 반환한다.',
    async ({ amount, expected }) => {
      // given
      const logSpy = getLogSpy();

      const AMOUNT_INPUT = `${amount}`;

      mockQuestions([AMOUNT_INPUT]);

      // when
      const input = await inputAmount();
      outputPayment(input);

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
    }
  );
});
