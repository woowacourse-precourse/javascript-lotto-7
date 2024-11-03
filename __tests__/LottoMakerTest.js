import { LottoMaker } from "../src/lotto/LottoMaker.js";
import { LOTTO_PRICE } from "../src/constant/constants.js";

describe('LottoMaker Class 테스트', () => {
  const priceArr = [1000, 3000, 5000];
  test.each(priceArr)('구입 금액에 해당하는 만큼 로또를 발행한다.', (price) => {
    const generatedLotto = new LottoMaker().makeLotto(price);

    expect(generatedLotto).toHaveLength(price / LOTTO_PRICE);
  })
});
