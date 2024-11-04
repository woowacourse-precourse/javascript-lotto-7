import Utils from '../src/utils/Utils.js';

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
    const parsedInput = Utils.parsingToNumber(inputs);

    expect(parsedInput).toBe(expected);
  });

  test.each([
    ['문자열', ['문자열']],
    ['0, 1, 2, 3', ['0', ' 1', ' 2', ' 3']],
    ['0,1,2,3,4', ['0', '1', '2', '3', '4']],
  ])(
    '문자열을 separator로 분리하여 배열로 파싱하는 함수 테스트',
    (inputs, expected) => {
      const parsedInput = Utils.parsingToArray(inputs);

      expect(parsedInput).toEqual(expected);
    },
  );
});
