import { emptyString } from '../../src/Utills/Check/emptyStr.js';

describe('emptyString 함수 테스트', () => {
  test.each([
    ['', true], // 빈 문자열
    [null, true], // null
    [undefined, true], // undefined
    [' ', true], // 공백 문자열
    ['    ', true], // 여러 개의 공백
    ['\t', true], // 탭 문자
    ['\n', true], // 줄바꿈 문자
    ['a', false], // 일반 문자
    ['0', false], // 숫자 문자열
    [' 1 ', false], // 공백이 포함된 숫자
    [' abc ', false], // 공백이 포함된 문자열
  ])('입력 %s에 대해 %s를 반환해야 한다', (input, expected) => {
    expect(emptyString(input)).toBe(expected);
  });
});
