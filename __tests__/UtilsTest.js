import Utils from '../src/utils/Utils';

describe('Utils 함수 테스트', () => {
  test.each([
    ['2000', 2000],
    ['0', 0],
    ['0.5', 0.5],
    ['-21', -21],
    ['숫자', NaN],
    ['2000원', NaN],
    [null, NaN],
    [undefined, NaN],
    ['$', NaN],
    ['$2000$', NaN],
  ])('input값을 숫자로 형 변환하는 함수 테스트', (inputs, expected) => {
    const parsedInput = Utils.parsingNumber(inputs);

    expect(parsedInput).toBe(expected);
  });
});
