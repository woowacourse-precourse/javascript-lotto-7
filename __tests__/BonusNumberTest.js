import Lotto from '../src/models/Lotto.js';
import validateBonus from '../src/models/validations/BonusInputValidator.js';

describe('보너스 번호 테스트', () => {
  const validLottoNumbers = [1, 2, 3, 4, 5, 6];

  /// /////////////////////// 올바른 입력 ///////////////////////////////
  test('올바른 보너스 번호가 주어지면 유효성 검증이 통과한다.', () => {
    expect(() => validateBonus(7, validLottoNumbers)).not.toThrow();
  });

  /// //////////////////////// 입력 오류 //////////////////////////////

  test('보너스 번호와 당첨번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      validateBonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test.each([
    ['a', '[ERROR]'], // 문자
    ['', '[ERROR]'], // 빈 문자
    [46, '[ERROR]'], // 범위 초과
    [0, '[ERROR]'], // 범위 미달
  ])('보너스 번호 %s 에 대해 예외가 발생해야 한다.', (bonusNumber, errorMessage) => {
    expect(() => validateBonus(bonusNumber)).toThrow(errorMessage);
  });
});
