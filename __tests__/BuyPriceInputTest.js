import BuyPriceInput from '../src/Views/BuyPriceInput.js';

// - 6. 구입 금액 입력

//   - 입력받은 금액이 1,000원으로 나누어 떨어지는지 확인 및 예외처리
//   - 1,000원 단위로 구입한 로또 개수 계산
//   - ➕ 입력받은 금액이 숫자가 아닌 경우 확인 및 에러처리
//   - ➕ 입력받은 금액이 너무 크거나, 음수인 경우 경우 확인 및 에러처리
//   - ➕ 금액을 입력하지 않은 경우 확인 및 에러처리

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
