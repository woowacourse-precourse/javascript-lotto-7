import WinningNumbersInputParser from '../src/inputParser/WinnigNumbersInputParser.js';

describe('WinningNumbersInputParser 클래스 테스트', () => {
  let parser;

  beforeEach(() => {
    parser = new WinningNumbersInputParser();
  });

  test('#splitWithComma', () => {
    const winningNumbersString = '1,2,3,4,5,6';
    const expected = [1, 2, 3, 4, 5, 6];

    const result = parser.splitWithCommaTest(winningNumbersString);
    expect(result).toEqual(expected);
  });
});
