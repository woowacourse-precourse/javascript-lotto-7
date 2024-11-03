import LottoPurchase from "../src/LottoPurchase";
import Constants from "../src/Constants"

describe("InputFormatter 클래스 테스트", () => {
  test("구매 금액이 1000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoPurchase(1500);
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 실수일 경우 예외가 발생한다.", () => {
    expect(() => { 
      new LottoPurchase(1000.5);
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => { 
      new LottoPurchase(NaN);
    }).toThrow("[ERROR]");
  });

  test("기능 테스트", () => {
    const lottoPurchase = new LottoPurchase(5000);
    const lottoList = lottoPurchase.getPurchaseLottoList();
    expect(lottoList).toHaveLength(5);
    lottoList.forEach(lottoNumbers => {
      expect(lottoNumbers).toHaveLength(Constants.LOTTO_NUMBER_COUNT);
    });
  });

});