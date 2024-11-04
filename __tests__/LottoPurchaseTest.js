import LottoPurchase from "../src/LottoPurchase";
import Constants from "../src/Constants"

describe("LottoPurchaseTest 클래스 테스트", () => {
  test("기능 테스트", () => {
    const lottoPurchase = new LottoPurchase(5000);
    const lottoList = lottoPurchase.getPurchaseLottoList();
    
    expect(lottoList).toHaveLength(5);
    lottoList.forEach(lottoNumbers => {
      expect(lottoNumbers).toHaveLength(Constants.LOTTO_NUMBER_COUNT);
    });
  });

});