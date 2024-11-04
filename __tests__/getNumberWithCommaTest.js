import getNumberWithComma from '../src/Utils/getNumberWithComma';

describe('숫자에 콤마 추가 Util함수 test', () => {
  test.each([
    [10000, '10,000'],
    [100, '100'],
    [56000000, '56,000,000'],
  ])('%s를 함수에 넣으면 %s가 나옵니다.', (number, expected) => {
    expect(getNumberWithComma(number)).toBe(expected);
  });
});
