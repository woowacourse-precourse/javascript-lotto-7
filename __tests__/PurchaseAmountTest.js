import { PurchaseAmountValidator } from '../src/Controller/purchaseAmountValidator.js';

// TODO: 에러 메시지 상수 처리 후, 메시지란에 상수 삽입
describe('로또 구입 금액 유효성 클래스 테스트', () => {
  test('빈값으로 입력한 경우 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new PurchaseAmountValidator().validatePurchaseAmount(input);
    }).toThrow('[ERROR]');
  });

  test('0원으로 입력한 경우 예외가 발생한다.', () => {
    const input = '0';
    expect(() => {
      new PurchaseAmountValidator().validatePurchaseAmount(input);
    }).toThrow('[ERROR]');
  });

  describe('1,000원 단위가 아닌 경우 예외 발생', () => {
    test('1,000원 단위가 아닌 경우 예외가 발생한다.', () => {
      const input = '4';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('1,000원 단위가 아닌 경우 예외가 발생한다.', () => {
      const input = '1200';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('1,000원 단위가 아닌 경우 예외가 발생한다.', () => {
      const input = '3001';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('1,000원 단위가 아닌 경우 예외가 발생한다.', () => {
      const input = '4600';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('1,000원 단위가 아닌 경우 예외가 발생한다.', () => {
      const input = '102300';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });
  });

  describe('문자 입력 경우 예외 발생', () => {
    test('한글을 입력한 경우 예외가 발생한다.', () => {
      const input = '만원';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('숫자와 한글을 혼합한 경우 예외가 발생한다.', () => {
      const input = '10만원';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('문자표를 넣은 경우 예외가 발생한다. ', () => {
      const input = '#';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });

    test('숫자와 문자표를 혼합한 경우 예외가 발생한다.', () => {
      const input = '10000#';
      expect(() => {
        new PurchaseAmountValidator().validatePurchaseAmount(input);
      }).toThrow('[ERROR]');
    });
  });
});
