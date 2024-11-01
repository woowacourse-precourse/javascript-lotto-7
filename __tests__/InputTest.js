/*import App from '../src/App.js';

describe('구입금액 입력 유효성 검사', () => {
  test('구입금액이 1000원 단위가 아닐 때 유효성 검사', () => {
    const input = '1015';
    expect(() => new App().getPurchaseMoney(Number(input))).toThrow(
      '[ERROR] 1000원 단위로 입력해 주십시오.'
    );
  });
});

describe('당첨번호 입력 유효성 검사', () => {
  test('구분자 유효성 검사', () => {
    const input = '1.2.3.4.5.6';
    expect(() => new App().getWinningNumbers(Number(input))).toThrow(
      '[ERROR] ,(쉼표)로 구분해 주십시오.'
    );
  });
});

describe('보너스 번호 입력 유효성 검사', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('숫자 중복 유효성 검사', () => {
    const input = '5';
    expect(() => new App().getBonusNumber(winningNumbers, input)).toThrow(
      '[ERROR] 중복된 값이 있습니다.'
    );
  });
});*/
