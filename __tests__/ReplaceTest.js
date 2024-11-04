import replaceEmptySpace from '../src/util/replaceEmptySpace.js';

describe('replaceEmptySpace 테스트', () => {
  test('문자열의 공백을 제거한다.', () => {
    const inputs = [
      '1, 2, 3, 4, 5, 6',
      '  1, 2, 3, 4, 5, 6',
      '1, 2, 3, 4, 5, 6 ',
      ' 1, 2, 3, 4, 5, 6 ',
    ];
    const output = '1,2,3,4,5,6';

    inputs.forEach((input) => {
      expect(replaceEmptySpace(input)).toBe(output);
    });
  });
});
