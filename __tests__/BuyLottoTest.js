import BuyLotto from '../src/BuyLotto';

describe('로또 구매 클래스 테스트', () => {
  test('구매 금액에 문자가 포함되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      const buyLotto = new BuyLotto('1000j');
      buyLotto.buyLotto();
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000으로 나눠 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      const buyLotto = new BuyLotto('1100');
      buyLotto.buyLotto();
    }).toThrow('[ERROR]');
  });
});
