import { parseNumbers } from '../src/utils/Parser.js';

describe('parseNumbers 함수 테스트', () => {
  test('쉼표로 구분된 숫자 문자열을 배열로 변환한다.', () => {
    const input = '1, 2, 3, 4, 5, 6';
    const result = parseNumbers(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
