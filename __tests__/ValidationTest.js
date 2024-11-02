import Validation from '../src/Contoller/Validation.js';

describe('Validation 테스트', () => {
  test('구매 금액이 1000원 단위가 아니면 예외가 발생한다', () => {
    expect(() => {
      Validation.validateThousandUnit(1500);
    }).toThrow('[ERROR] 구매 금액은 1000원 단위여야 합니다.');

    expect(() => {
      Validation.validateThousandUnit(1000);
    }).not.toThrow();
  });

  test('입력값을 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateNotEmpty('');
    }).toThrow('[ERROR] 입력값이 없습니다.');

    expect(() => {
      Validation.validateNotEmpty(1000);
    }).not.toThrow();
  });

  test('로또 번호가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();

    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');

    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });
});
