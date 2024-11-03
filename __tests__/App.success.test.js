import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../src/mocks/testUtils.js';

describe('로또 성공 케이스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('수익률 계산 성공 테스트', () => {
    test.each([
      {
        description: '1등 당첨시 수익률 계산',
        randomNumbers: [[1, 2, 3, 4, 5, 6]],
        inputs: ['1000', '1,2,3,4,5,6', '7'],
        expectedRate: '200000000.0',
      },
      {
        description: '3개 번호 일치시 수익률 계산',
        randomNumbers: [[1, 2, 3, 7, 8, 9]],
        inputs: ['1000', '1,2,3,4,5,6', '7'],
        expectedRate: '500.0',
      },
      {
        description: '미당첨시 수익률 계산',
        randomNumbers: [[7, 8, 9, 10, 11, 12]],
        inputs: ['1000', '1,2,3,4,5,6', '13'],
        expectedRate: '0.0',
      },
    ])('$description', async ({ randomNumbers, inputs, expectedRate }) => {
      const logSpy = getLogSpy();
      mockRandoms(randomNumbers);
      mockQuestions(inputs);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(`총 수익률은 ${expectedRate}%입니다.`)
      );
    });
  });
});
