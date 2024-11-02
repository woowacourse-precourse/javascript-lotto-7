import { validatePurchaseAmount, validateWinningNumber, validateBonusNumber } from '../src/Validation.js';

describe('validatePurchaseAmount()', () => {
  test('입력이 비어있는 경우 에러가 발생한다.', () => {
    expect(() => validatePurchaseAmount('')).toThrow(
      '[ERROR] 입력이 없습니다.'
    );
  });

  describe('숫자 이외의 문자가 포함된 경우 에러가 발생한다.', () => {
    test.each([
      ['12,000', '쉼표가 포함된 입력'],
      ['12000 ', '공백이 포함된 입력'],
      ['12000won', '알파벳이 포함된 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validatePurchaseAmount(input)).toThrow(
        '[ERROR] 숫자 이외의 문자가 입력되었습니다.'
      );
    });
  });

  test('1,000원으로 나누어 떨어지지 않는 경우 에러가 발생한다.', () => {
    expect(() => validatePurchaseAmount('12100')).toThrow(
      '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.'
    );
  });
});

describe('validateWinningNumber()', () => {
  test('입력이 비어있는 경우 에러가 발생한다.', () => {
    expect(() => validateWinningNumber('')).toThrow(
      '[ERROR] 입력이 없습니다.'
    );
  });

  describe('로또 번호가 6개일 경우 에러가 발생하지 않는다.', () => {
    test.each([
      [['a', '1', '45', '22', ':', '6'], '숫자 이외의 문자가 포함된 입력'],
      [['67', '100', '-1', '33', '1', '0'], '범위에서 벗어난 숫자가 포함된 입력'],
      [['1', '2', '3', '4', '5', '6'], '올바른 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateWinningNumber(input)).not.toThrow(
        '[ERROR] 로또 번호는 6개여야 합니다.'
      );
    });
  });

  describe('로또 번호가 6개가 아닐 경우 에러가 발생한다.', () => {
    test.each([
      [['a', '1', '45', '22', ':'], '숫자 이외의 문자가 포함된 길이가 7인 입력'],
      [['67', '100', '-1', '33', '1', '0', 'b'], '범위에서 벗어난 숫자가 포함된 길이가 5인 입력'],
      [['1'], '길이가 1인 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateWinningNumber(input)).toThrow(
        '[ERROR] 로또 번호는 6개여야 합니다.'
      );
    });
  });

  describe('숫자 이외의 문자가 포함된 경우 에러가 발생한다.', () => {
    test.each([
      [['a', '2', '3', '4', '5', '6'], '알파벳이 포함된 입력'],
      [['1', '2', '3:', '4', '5', '6'], '특수문자가 포함된 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateWinningNumber(input)).toThrow(
        '[ERROR] 숫자 이외의 문자가 입력되었습니다.'
      );
    });
  });

  test('숫자만 있는 경우 에러가 발생하지 않는다.', () => {
    expect(() => validateWinningNumber(['1', '10', '100', '1000', '10000', '100000'])).not.toThrow(
      '[ERROR] 숫자 이외의 문자가 입력되었습니다.'
    );
  });

  describe('1보다 작거나 45보다 큰 수가 포함된 경우 에러가 발생한다.', () => {
    test.each([
      [['0', '2', '3', '4', '5', '6'], '1보다 작은 수가 포함된 입력'],
      [['1', '2', '3', '4', '5', '46'], '45보다 큰 수가 포함된 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateWinningNumber(input)).toThrow(
        '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
      );
    });
  });

  test('범위 내의 숫자만 입력된 경우 에러가 발생하지 않는다.', () => {
    expect(() => validateWinningNumber(['1', '2', '3', '43', '44', '45'])).not.toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
    );
  });

  test('중복된 숫자가 있는 경우 에러가 발생한다.', () => {
    expect(() => validateWinningNumber(['1', '1', '2', '2', '3', '3'])).toThrow(
      '[ERROR] 로또 번호는 중복될 수 없습니다.'
    );
  });

  test('중복된 숫자가 없는 경우 에러가 발생하지 않는다.', () => {
    expect(() => validateWinningNumber(['1', '2', '3', '4', '5', '6'])).not.toThrow(
      '[ERROR] 로또 번호는 중복될 수 없습니다.'
    );
  });
});

describe('validateBonusNumber()', () => {
  test('입력이 비어있는 경우 에러가 발생한다.', () => {
    expect(() => validateBonusNumber('')).toThrow(
      '[ERROR] 입력이 없습니다.'
    );
  });

  describe('숫자 이외의 문자가 포함된 경우 에러가 발생한다.', () => {
    test.each([
      ['a', '알파벳 입력'],
      [':', '특수문자 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateBonusNumber(input)).toThrow(
        '[ERROR] 숫자 이외의 문자가 입력되었습니다.'
      );
    });
  });

  test('숫자만 입력된 경우 에러가 발생하지 않는다.', () => {
    expect(() => validateBonusNumber('100')).not.toThrow(
      '[ERROR] 숫자 이외의 문자가 입력되었습니다.'
    );
  });

  describe('1보다 작거나 45보다 큰 경우 에러가 발생한다.', () => {
    test.each([
      ['0', '1보다 작은 입력'],
      ['46', '45보다 큰 입력'],
    ])('%s - %s', (input, description) => {
      expect(() => validateBonusNumber(input)).toThrow(
        '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
      );
    });
  });

  test('범위 내의 숫자일 경우 에러가 발생하지 않는다.', () => {
    expect(() => validateBonusNumber('33')).not.toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
    );
  });
});