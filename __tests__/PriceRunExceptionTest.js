import { getLogSpy, mockQuestions, mockRandoms } from '../src/test/testUtil.js';
import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/errorMessage.js';

export const priceRunException = async (price, errorMessage) => {
  // given
  const logSpy = getLogSpy();

  mockRandoms([[1, 2, 3, 4, 5, 6]]);
  mockQuestions([price, '1000', '1,2,3,4,5,6', '7']);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('구입 금액 예외 테스트', () => {
  test('테스트 코드', async () => {
    await priceRunException('1000j', ERROR_MESSAGE.NUMBER_PRICE);
    await priceRunException('900', ERROR_MESSAGE.MIN_PRICE);
    await priceRunException('1000000000', ERROR_MESSAGE.MAX_PRICE);
    await priceRunException('1100', ERROR_MESSAGE.UNIT_PRICE);
  });
});
