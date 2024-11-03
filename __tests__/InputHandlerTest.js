import InputHandler from '../src/Contoller/InputHandler.js';

describe('InputHandler 테스트', () => {
  let inputHandler;
  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  test('사용자가 입력한 구매금액이 올바르면 정상적으로 값을 반환한다.', () => {
    const purchseAmount = inputHandler.getValidatedPurchseAmount('1000');
    expect(purchseAmount).toEqual(1000);
  });

  test('사용자가 구매금액을 입력하지 않았으면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('');
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('사용자가 입력한 구매금액이 숫자가 아니면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('천원');
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
    expect(() => {
      inputHandler.getValidatedPurchseAmount('$$');
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
  });

  test('사용자가 입력한 구매금액이 1000원 단위가 아니면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('1500');
    }).toThrow('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
  });
});
