import { emptyString } from '../../src/Utills/Check/emptyStr.js';

describe('emptyString 함수 테스트', () => {
  test('입력이 빈 문자열일 경우 true를 반환해야 한다', () => {
    expect(emptyString('')).toBe(true);
  });

  test('입력이 null일 경우 true를 반환해야 한다', () => {
    expect(emptyString(null)).toBe(true);
  });

  test('입력이 undefined일 경우 true를 반환해야 한다', () => {
    expect(emptyString(undefined)).toBe(true);
  });

  test('입력이 공백 문자열만 포함하는 경우 true를 반환해야 한다', () => {
    expect(emptyString(' ')).toBe(true);
    expect(emptyString('    ')).toBe(true);
    expect(emptyString('\t')).toBe(true); // 탭 문자
    expect(emptyString('\n')).toBe(true); // 줄바꿈 문자
  });

  test('입력이 공백이 아닌 문자일 경우 false를 반환해야 한다', () => {
    expect(emptyString('a')).toBe(false);
    expect(emptyString('0')).toBe(false);
    expect(emptyString(' 1 ')).toBe(false); // 공백이 포함된 숫자
  });

  test('입력이 공백이 포함된 문자열일 경우 false를 반환해야 한다', () => {
    expect(emptyString(' abc ')).toBe(false);
  });
});
