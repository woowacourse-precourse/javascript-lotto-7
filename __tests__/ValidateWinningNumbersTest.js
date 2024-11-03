import ValidateWinningNumbers from '../src/models/ValidateWinningNumbers.js';

describe('당첨 번호 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateWinningNumbers();
  });

  test('쉼표로 구분되지 않은 입력은 예외가 발생한다.', () => {
    expect(() => {
      validator.validateWinningNumbersFormat('1 2 3 4 5 6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      validator.validateWinningNumbersFormat('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('숫자 범위가 1-45를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateNumberRange(0);
    }).toThrow('[ERROR]');

    expect(() => {
      validator.validateNumberRange(46);
    }).toThrow('[ERROR]');
  });

  test('중복된 번호가 있으면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateDuplicateNumbers([1, 2, 3, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('정상적인 당첨 번호는 검증을 통과한다.', () => {
    expect(() => {
      validator.validateWinningNumbersFormat('1,2,3,4,5,6');
      validator.validateDuplicateNumbers([1, 2, 3, 4, 5, 6]);
      [1, 2, 3, 4, 5, 6].forEach((num) => validator.validateNumberRange(num));
    }).not.toThrow();
  });
});
