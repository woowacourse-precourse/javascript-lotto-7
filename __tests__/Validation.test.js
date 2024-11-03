import { Validation } from '../src/lottoMachine/Validation.js';

const validation = new Validation();

describe('validatePurchasePrice 검증 테스트', () => {
  test('공백이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      validation.validatePurchasePrice('', ' ');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validatePurchasePrice('a', '!');
    }).toThrow('[ERROR]');
  });

  test('값이 1,000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validatePurchasePrice('1500', '0');
    }).toThrow('[ERROR]');
  });
});

describe('validateWinningNumbers 검증 테스트', () => {
  test('숫자가 6개 이상, 이하로 들어오면 예외가 발생한다.', () => {
    expect(() => {
      validation.validateWinningNumbers([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateWinningNumbers(['a']);
    }).toThrow('[ERROR]');
  });

  test('값이 1 ~ 45 사이가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateWinningNumbers([0, -3, 50]);
    }).toThrow('[ERROR]');
  });

  test('값이 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('validateBonusNumber 검증 테스트', () => {
  test('공백이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      validation.validateBonusNumber('', ' ');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateBonusNumber('a', '!');
    }).toThrow('[ERROR]');
  });

  test('값이 1 ~ 45 사이가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateBonusNumber('0', '-3', '50');
    }).toThrow('[ERROR]');
  });

  test('당첨번호와 값이 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      validation.validateBonusNumber('1', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
