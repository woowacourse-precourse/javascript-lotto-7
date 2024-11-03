import { amountInputTestCase } from '../src/constant/amountInputTestCase.js';
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('구매 금액 입력 테스트', () => {
  test.each(amountInputTestCase)(
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
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    }
  );
});
