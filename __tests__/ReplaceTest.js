import replaceEmptySpace from '../src/util/replaceEmptySpace.js';

describe('replaceEmptySpace 테스트', () => {
  test.each([
    { input: '1, 2, 3, 4, 5, 6', output: '1,2,3,4,5,6' },
    { input: '  1, 2, 3, 4, 5, 6', output: '1,2,3,4,5,6' },
    { input: '1, 2, 3, 4, 5, 6 ', output: '1,2,3,4,5,6' },
    { input: ' 1, 2, 3, 4, 5, 6 ', output: '1,2,3,4,5,6' },
  ])('문자열의 공백을 제거한다.', ({ input, output }) => {
    expect(replaceEmptySpace(input)).toBe(output);
  });
});
