import ResultCalculator from '../src/controllers/ResultCalculator.js';
import { PRIZE } from '../src/constants/constants.js';

describe('당첨 결과 계산 로직 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  const testCases = [
    {
      description: '당첨 번호와 일치하는 숫자 6개가 있을 경우 1등으로 판별된다.',
      input: [[1, 2, 3, 4, 5, 6]],
      expectedCounts: { first: 1, second: 0, third: 0, fourth: 0, fifth: 0 },
    },
    {
      description: '당첨 번호 5개와 보너스 번호가 일치할 경우 2등으로 판별된다.',
      input: [[1, 2, 3, 4, 5, 7]],
      expectedCounts: { first: 0, second: 1, third: 0, fourth: 0, fifth: 0 },
    },
    {
      description: '당첨 번호 5개가 일치하고 보너스 번호가 일치하지 않을 경우 3등으로 판별된다.',
      input: [[1, 2, 3, 4, 5, 8]],
      expectedCounts: { first: 0, second: 0, third: 1, fourth: 0, fifth: 0 },
    },
    {
      description: '당첨 번호 4개가 일치할 경우 4등으로 판별된다.',
      input: [[1, 2, 3, 4, 9, 10]],
      expectedCounts: { first: 0, second: 0, third: 0, fourth: 1, fifth: 0 },
    },
    {
      description: '당첨 번호 3개가 일치할 경우 5등으로 판별된다.',
      input: [[1, 2, 3, 11, 12, 13]],
      expectedCounts: { first: 0, second: 0, third: 0, fourth: 0, fifth: 1 },
    },
    {
      description: '당첨 번호가 2개 이하로 일치할 경우에는 당첨되지 않는다.',
      input: [[1, 2, 12, 13, 14, 15]],
      expectedCounts: { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 },
    },
  ];

  test.each(testCases)('$description', ({ input, expectedCounts }) => {
    const resultCalculator = new ResultCalculator(input, winningNumbers, bonusNumber);
    resultCalculator.calculateResults();

    const prizeCounts = resultCalculator.getPrizeCounts();
    expect(prizeCounts).toEqual(expectedCounts);
  });
});
