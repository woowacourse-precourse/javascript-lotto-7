import PriceValidator from '../src/validator/PriceValidator';

describe('구입금액 유효성 검사 성공 테스트', () => {
  test('구입금액이 올바르면 입력한 구입금액를 그대로 반환한다.', () => {
    expect(PriceValidator.validatePrice(2000)).toEqual(2000);
  });
});

describe('구입금액 유효성 검사 예외 테스트', () => {
  test('구입금액을 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      PriceValidator.validatePrice('');
    }).toThrow('[ERROR]');
  });

  test('구입금액을 정수로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      PriceValidator.validatePrice('1@@@');
    }).toThrow('[ERROR]');
  });

  test.each(['-1200', '900'])(
    '구입금액을 1000원 이상으로 입력하지 않으면 예외가 발생한다. (%s)',
    (price) => {
      expect(() => {
        PriceValidator.validatePrice(price);
      }).toThrow('[ERROR]');
    }
  );

  test.each(['1001', '4500'])(
    '구입금액을 1,000원 단위로 입력하지 않으면 예외가 발생한다. (%s)',
    (price) => {
      expect(() => {
        PriceValidator.validatePrice(price);
      }).toThrow('[ERROR]');
    }
  );
});
