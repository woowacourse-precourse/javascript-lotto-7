import Lotto from '../src/Lotto';

describe('보너스 번호 테스트', () => {
  const validLottoNumbers = [1, 2, 3, 4, 5, 6];
  let lotto;

  beforeEach(() => {
    lotto = new Lotto(validLottoNumbers);
  });

  /// /////////////////////// 올바른 입력 ///////////////////////////////
  test('올바른 보너스 번호가 주어지면 유효성 검증이 통과한다.', () => {
    expect(() => lotto.validateBonusNumber(7)).not.toThrow();
  });

  /// //////////////////////// 입력 오류 //////////////////////////////
  test.each([
    [1, '[ERROR]'], // 중복된 번호
    ['a', '[ERROR]'], // 문자
    ['', '[ERROR]'], // 빈 문자
    [46, '[ERROR]'], // 범위 초과
    [0, '[ERROR]'], // 범위 미달
  ])('보너스 번호 %s 에 대해 예외가 발생해야 한다.', bonusNumber => {
    expect(() => lotto.validateBonusNumber(bonusNumber)).toThrow('[ERROR]');
  });
});
