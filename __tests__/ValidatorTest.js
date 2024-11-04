import {
  validateUserMoney,
  validateLottoNumbers,
  validateBonusNumber,
} from '../src/validation';

describe('validateUserMoney 함수 테스트', () => {
  test('금액이 숫자가 아니면 예외 발생', () => {
    expect(() => {
      validateUserMoney('@');
    }).toThrow('[ERROR]');
  });

  test('금액이 공백인 경우', () => {
    expect(() => {
      validateUserMoney('');
    }).toThrow('[ERROR]');
  });
});

describe('validateLottoNumbers 함수 테스트', () => {
  test('당첨 번호가 6개가 아닌 경우', () => {
    expect(() => {
      validateLottoNumbers([1, 2, 3]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1에서 45 사이의 숫자가 아닌 경우', () => {
    expect(() => {
      validateLottoNumbers([1, 2, 3, 4, 5, 55]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 중복인 경우', () => {
    expect(() => {
      validateLottoNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('validateBonusNumber 함수 테스트', () => {
  test('보너스 번호가 공백인 경우 ', () => {
    expect(() => {
      validateBonusNumber('', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닌 경우', () => {
    expect(() => {
      validateBonusNumber('@', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복인 경우', () => {
    expect(() => {
      validateBonusNumber(2, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1에서 45 사이의 숫자가 아닌 경우', () => {
    expect(() => {
      validateBonusNumber(70, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
