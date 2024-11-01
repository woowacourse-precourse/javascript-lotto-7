import BuyPriceInput from '../src/Views/BuyPriceInput';

// - 8. 당첨 번호와 보너스 번호 입력

//   - 보너스 번호를 입력했을 때 당첨 번호와 중복인지 확인 및 예외처리
//   -

describe('구입 금액 입력 Validate 테스트', () => {
  test('금액을 입력하지 않으면 다시 입력을 받아야 합니다.', () => {
    expect(BuyPriceInput.validate('')).toEqual(false);
  });

  test('금액으로 숫자를 입력하지 않으면 다시 입력을 받아야 합니다.', () => {
    expect(BuyPriceInput.validate('MinSungJe')).toEqual(false);
  });

  test('금액으로 음수를 입력하면 다시 입력을 받아야 합니다.', () => {
    expect(BuyPriceInput.validate('-1')).toEqual(false);
  });

  test('금액으로 너무 큰 수를 입력하면 다시 입력을 받아야 합니다.', () => {
    expect(BuyPriceInput.validate('10000000000000000')).toEqual(false);
  });

  test('금액으로 단위에 떨어지지 않는 값을 입력하면 다시 입력을 받아야 합니다.', () => {
    expect(BuyPriceInput.validate('8130')).toEqual(false);
  });

  test('정상 금액을 입력하면, 통과가 됩니다.', () => {
    expect(BuyPriceInput.validate('7000')).toEqual(true);
  });
});
