import Statistics from '../utils/Statistics.js';

describe('금액별 개수 나누기', () => {
  test('정상 케이스', () => {
    const input = [1, 2, 2, 3, 4, 4];
    const expectedOutput = [
      { rank: 5, count: 0 },
      { rank: 4, count: 2 },
      { rank: 3, count: 1 },
      { rank: 2, count: 2 },
      { rank: 1, count: 1 },
    ];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('빈 배열 테스트', () => {
    const input = [];
    const expectedOutput = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('모두 동일한 요소 테스트', () => {
    const input = [3, 3, 3, 3];
    const expectedOutput = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 4 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('정렬 테스트 - 다양한 숫자', () => {
    const input = [1, 3, 3, 5, 5, 5];
    const expectedOutput = [
      { rank: 5, count: 3 },
      { rank: 4, count: 0 },
      { rank: 3, count: 2 },
      { rank: 2, count: 0 },
      { rank: 1, count: 1 },
    ];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });
});
