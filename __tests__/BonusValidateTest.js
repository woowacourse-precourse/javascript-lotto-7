import validateBonusNumber from '../src/validation/validate-bonus-number.js';

describe('보너스 번호 유효성 검사 테스트', () => {
  test('보너스 번호가 비어 있을 때 예외 발생', () => {
    expect(() => {
      validateBonusNumber(null, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 보너스 번호를 입력해주세요.');
  });

  test('보너스 번호가 유효한 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      validateBonusNumber(NaN, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 유효한 숫자를 입력해주세요.');
  });

  test('보너스 번호가 범위를 벗어날 때 예외 발생', () => {
    expect(() => {
      validateBonusNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow(`[ERROR] 보너스 번호는 1부터 45 사이여야 합니다.`);

    expect(() => {
      validateBonusNumber(68, [1, 2, 3, 4, 5, 6]);
    }).toThrow(`[ERROR] 보너스 번호는 1부터 45 사이여야 합니다.`);
  });

  test('보너스 번호가 당첨 번호와 중복될 때 예외 발생', () => {
    expect(() => {
      validateBonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('유효한 보너스 번호 입력 시 예외가 발생하지 않음', () => {
    expect(() => {
      validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
