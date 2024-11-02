import Validation from '../src/Contoller/Validation.js';

describe('Validation 테스트', () => {
  test('구매 금액이 1000원 단위가 아니면 예외가 발생한다', () => {
    expect(() => Validation.validateThousandUnit(1500)).toThrow(
      '[ERROR] 구매 금액은 1000원 단위여야 합니다.'
    );
    expect(() => Validation.validateThousandUnit(1000)).not.toThrow();
  });

  test('입력값을 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => Validation.validateNotEmpty('')).toThrow(
      '[ERROR] 입력값이 없습니다.'
    );
    expect(() => Validation.validateNotEmpty(1000)).not.toThrow();
  });
});
