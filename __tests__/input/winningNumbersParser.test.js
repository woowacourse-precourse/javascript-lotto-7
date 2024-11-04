import winningNumbersParser from '../../src/utils/winningNumbersParser.js';

describe('winningNumbersParser 함수 테스트', () => {

  const validCases = [
    ["쉼표로 구분된 숫자 문자열", '1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
    ["숫자 사이에 공백이 포함된 경우", ' 1, 2 , 3      ,4 , 5 ,6 ', [1, 2, 3, 4, 5, 6]],
  ];

  test.each(validCases)('%s', (_, input, expectedOutput) => {
    expect(winningNumbersParser(input)).toEqual(expectedOutput);
  });
});