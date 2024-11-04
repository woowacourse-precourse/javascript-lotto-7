import validateMoney from '../src/models/validations/MoneyInputValidator';

describe('구입 금액 테스트', () => {
  const money = 3000;

  /// /////////////////////// 올바른 입력 ///////////////////////////////
  test('올바른 금액이 입력되면 유효성 검사가 통과된다.', () => {
    expect(() => validateMoney(money)).not.toThrow();
  });

  /// //////////////////////// 입력 오류 //////////////////////////////
  test.each([
    [13201, '[ERROR]'], // money%1000!=0
    ['a', '[ERROR]'], // 문자
    ['', '[ERROR]'], // 빈 문자
  ])('금액에 %s 대해 예외가 발생해야 한다.', input => {
    expect(() => validateMoney(input)).toThrow('[ERROR]');
  });
});
