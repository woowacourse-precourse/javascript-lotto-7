import Statistics from '../utils/Statistics.js';

describe('개수 나누기 ', () => {
  test('정상 케이스', () => {
    const input = [123, 1234, 123, 1231, 1234];
    const expectedOutput = [
      [123, 2],
      [1234, 2],
      [1231, 1],
    ];

    const result = Statistics.countOccurrences(input);

    // 결과가 예상된 출력과 동일한지 확인
    expect(result).toEqual(expectedOutput);
  });

  test('빈 배열 테스트', () => {
    const input = [];
    const expectedOutput = [];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('한개 있을 때 테스트 ', () => {
    const input = [123];
    const expectedOutput = [[123, 1]];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });

  test('한개가 세개만 있는 케이스', () => {
    const input = [123, 123, 123];
    const expectedOutput = [[123, 3]];

    const result = Statistics.countOccurrences(input);

    expect(result).toEqual(expectedOutput);
  });
});
