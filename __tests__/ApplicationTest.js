import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/errorMessage.js';
import { MATCH_PRICE } from '../src/constant/system.js';
import { mockQuestions, getLogSpy, mockRandoms } from '../src/test/testUtil.js';

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      `3개 일치 (${MATCH_PRICE.THREE.toLocaleString()}원) - 1개`,
      `4개 일치 (${MATCH_PRICE.FOUR.toLocaleString()}원) - 0개`,
      `5개 일치 (${MATCH_PRICE.FIVE.toLocaleString()}원) - 0개`,
      `5개 일치, 보너스 볼 일치 (${MATCH_PRICE.FIVE_BONUS.toLocaleString()}원) - 0개`,
      `6개 일치 (${MATCH_PRICE.SIX.toLocaleString()}원) - 0개`,
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
