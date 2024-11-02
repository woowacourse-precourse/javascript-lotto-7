import Statistics from '../utils/Statistics.js';

describe('개수 나누기 ', () => {
  test('정상 케이스', () => {
    const input = [123, 1234, 123, 1231, 1234];
    const expectedOutput = [
      { money: 123, count: 2 },
      { money: 1234, count: 2 },
      { money: 1231, count: 1 },
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

  test('한 개 있을 때 테스트', () => {
    const input = [123];
    const expectedOutput = [{ money: 123, count: 1 }];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('모두 동일한 요소 테스트', () => {
    const input = [123, 123, 123];
    const expectedOutput = [{ money: 123, count: 3 }];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });
});
