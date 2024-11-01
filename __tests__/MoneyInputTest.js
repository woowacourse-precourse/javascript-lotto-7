import App from '../src/App.js';

describe('구입금액 입력 유효성 검사', () => {
  test('구입금액이 1000원 단위가 아닐 때 유효성 검사', () => {
    const input = '1015';
    expect(() => new App().getPurchaseMoney(Number(input))).toThrow(
      '[ERROR] 1000원 단위로 입력해 주십시오.'
    );
  });
});
