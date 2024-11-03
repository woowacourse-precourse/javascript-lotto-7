import {
  amountInputErrorTestCase,
  amountInputSuccessTestCase,
} from '../src/constant/amountInputTestCase.js';
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { inputAmount } from '../src/utils/inputService.js';
import { outputPayment } from '../src/utils/outputService.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('구매 금액 입력 에러 테스트', () => {
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
});

describe('구매 금액 입력 성공 테스트', () => {
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
