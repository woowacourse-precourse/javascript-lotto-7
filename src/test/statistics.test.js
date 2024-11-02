import Statistics from '../utils/Statistics.js';

describe('금액별 개수 나누기', () => {
  test('정상 케이스', () => {
    const input = [0, 2, 2, 3, 4, 4];
    const expectedOutput = [
      { money: '0', count: 1 },
      { money: '2', count: 2 },
      { money: '3', count: 1 },
      { money: '4', count: 2 },
    ];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('빈 배열 테스트', () => {
    const input = [];
    const expectedOutput = [];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('모두 동일한 요소 테스트', () => {
    const input = [2, 2, 2, 2];
    const expectedOutput = [{ money: '2', count: 4 }];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });
});
