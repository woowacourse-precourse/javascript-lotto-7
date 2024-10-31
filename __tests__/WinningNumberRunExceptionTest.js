import { getLogSpy, mockQuestions, mockRandoms } from '../src/test/testUtil.js';
import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/errorMessage.js';

const winningNumbersRunException = async (winningNumbers, errorMessage) => {
  const logSpy = getLogSpy();

  mockRandoms([[1, 2, 3, 4, 5, 6]]);
  mockQuestions(['1000', winningNumbers, '1,2,3,4,5,6', '7']);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('당첨 번호 예외 테스트', () => {
  test('테스트 코드', async () => {
    await winningNumbersRunException(
      '1,1,2,3,4,5',
      ERROR_MESSAGE.DUPLICATE_WINNIG_NUMBERS,
    );
    await winningNumbersRunException(
      '1,2,3',
      ERROR_MESSAGE.LENGTH_WINNING_NUMBERS,
    );
    await winningNumbersRunException(
      '1,a,b,2,3,4',
      ERROR_MESSAGE.INTEGER_WINNING_NUMBERS,
    );
    await winningNumbersRunException(
      '1000,1,2,3,4,5',
      ERROR_MESSAGE.RANGE_WINNING_NUMBERS,
    );
  });
});
