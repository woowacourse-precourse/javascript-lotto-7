import User from '../src/Domain/user';

describe('구입 금액 유효성 검사', () => {
  test('구입 금액이 1000원 단위가 아닐 시 예외 발생', () => {
    const input = '1015';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 1000원 단위로 입력해 주십시오.'
    );
  });

  test('구입 금액이 숫자가 아닐 시 예외 발생', () => {
    const input = 'haku';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 숫자를 입력해 주십시오.'
    );
  });

  test('구입 금액이 0일 시 예외 발생', () => {
    const input = '0';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 금액은 1000원 이상부터 가능합니다.'
    );
  });

  test('구입 금액이 음수일 시 예외 발생', () => {
    const input = '-1000';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 금액은 1000원 이상부터 가능합니다.'
    );
  });
});
