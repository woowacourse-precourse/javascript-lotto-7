import { getLogSpy, mockQuestions, mockRandoms } from '../src/test/testUtil.js';
import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/errorMessage.js';

export const bonusNumberRunException = async (bonusNumber, errorMessage) => {
  // given
  const logSpy = getLogSpy();

  mockRandoms([[1, 2, 3, 4, 5, 6]]);
  mockQuestions(['1000', '1,2,3,4,5,6', bonusNumber, '7']);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('보너스 번호 예외 테스트', () => {
  test('테스트 코드', async () => {
    await bonusNumberRunException('1', ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    await bonusNumberRunException('50', ERROR_MESSAGE.RANGE_BONUS_NUMBER);
    await bonusNumberRunException('a', ERROR_MESSAGE.INTEGER_BONUS_NUMBER);
  });
});
