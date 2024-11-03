import InputView from '../src/views/InputView.js';

describe('InputView', () => {
  describe('splitAndTrim', () => {
    test('입력이 올바른 경우 배열을 반환한다.', () => {
      const input = '1,2,3,4,5,6';
      const expected = ['1', '2', '3', '4', '5', '6'];
      expect(InputView.splitAndTrim(input)).toEqual(expected);
    });

    test('입력에 공백이 포함된 경우 공백을 제거하고 배열을 반환한다.', () => {
      const input = '1, 2, 3, 4, 5, 6';
      const expected = ['1', '2', '3', '4', '5', '6'];
      expect(InputView.splitAndTrim(input)).toEqual(expected);
    });

    test('빈 문자열이 포함된 경우 빈 문자열을 필터링한다.', () => {
      const input = '1,2,,4,5,6';
      const expected = ['1', '2', '4', '5', '6'];
      expect(InputView.splitAndTrim(input)).toEqual(expected);
    });

    test('입력이 빈 문자열인 경우 빈 배열을 반환한다.', () => {
      const input = '';
      const expected = [];
      expect(InputView.splitAndTrim(input)).toEqual(expected);
    });
  });

  describe('convertToNumbers', () => {
    test('문자열 배열을 숫자 배열로 변환한다.', () => {
      const input = ['1', '2', '3', '4', '5', '6'];
      const expected = [1, 2, 3, 4, 5, 6];
      expect(InputView.convertToNumbers(input)).toEqual(expected);
    });

    test('빈 배열을 숫자 배열로 변환하면 빈 배열을 반환한다.', () => {
      const input = [];
      const expected = [];
      expect(InputView.convertToNumbers(input)).toEqual(expected);
    });
  });

  describe('parseWinningNumbers', () => {
    test('입력이 올바른 경우 숫자 배열을 반환한다.', () => {
      const input = '1,2,3,4,5,6';
      const expected = [1, 2, 3, 4, 5, 6];
      expect(InputView.parseWinningNumbers(input)).toEqual(expected);
    });

    test('입력에 공백이 포함된 경우 공백을 제거하고 숫자 배열을 반환한다.', () => {
      const input = '1, 2, 3, 4, 5, 6';
      const expected = [1, 2, 3, 4, 5, 6];
      expect(InputView.parseWinningNumbers(input)).toEqual(expected);
    });

    test('빈 문자열이 포함된 경우 빈 문자열을 필터링하여 숫자 배열을 반환한다.', () => {
      const input = '1,2,,4,5,6';
      const expected = [1, 2, 4, 5, 6];
      expect(InputView.parseWinningNumbers(input)).toEqual(expected);
    });

    test('입력이 빈 문자열인 경우 빈 배열을 반환한다.', () => {
      const input = '';
      const expected = [];
      expect(InputView.parseWinningNumbers(input)).toEqual(expected);
    });
  });

  describe('parseBonusNumber', () => {
    test('보너스 번호가 비어있는 경우 빈 문자열을 반환한다.', () => {
      const input = '   ';
      const expected = '';
      expect(InputView.parseBonusNumber(input)).toBe(expected);
    });

    test('보너스 번호가 숫자인 경우 해당 숫자를 반환한다.', () => {
      const input = '7';
      const expected = 7;
      expect(InputView.parseBonusNumber(input)).toBe(expected);
    });

    test('보너스 번호에 공백이 포함된 경우 공백을 제거하고 숫자를 반환한다.', () => {
      const input = ' 7 ';
      const expected = 7;
      expect(InputView.parseBonusNumber(input)).toBe(expected);
    });
  });
});
