import Statistics from '../utils/Statistics.js';

describe('금액별 개수 나누기', () => {
  test('정상 케이스', () => {
    const input = ['5,000원', '5,000원', '50,000원'];
    const expectedOutput = [
      { money: '5,000원', count: 2 },
      { money: '50,000원', count: 1 },
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
    const input = ['5,000원'];
    const expectedOutput = [{ money: '5,000원', count: 1 }];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('모두 동일한 요소 테스트', () => {
    const input = ['50,000원', '50,000원', '50,000원'];
    const expectedOutput = [{ money: '50,000원', count: 3 }];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });
});
