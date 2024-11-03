import { LottoMaker } from "../src/lotto/LottoMaker.js";
import { LOTTO_UNIT_PRICE } from "../src/constant/constants.js";
import { inValidMessages } from "../src/constant/message.js";

describe('LottoMaker Class 테스트', () => {
  const priceArr = [1000, 3000, 5000];
  test.each(priceArr)('구입 금액에 해당하는 만큼 로또를 발행한다.', (price) => {
    const generatedLotto = new LottoMaker().makeLotto(price);

    expect(generatedLotto).toHaveLength(price / LOTTO_UNIT_PRICE);
  })

  const underMinPriceArr = [0, 200, 330, 999];
  test.each(underMinPriceArr)('구입 금액이 최소 금액 미만이면 에러를 던진다.', (price) => {
    const lottoMaker = new LottoMaker();
    expect(() => lottoMaker.makeLotto(price)).toThrow(inValidMessages.minPrice);
  })

  const inDivisiblePriceArr = [3300, 1200, 1100, 1500];
  test.each(inDivisiblePriceArr)('구입 금액이 로또 가격으로 나누어 떨어지지 않으면 에러를 던진다.', (price) => {
    const lottoMaker = new LottoMaker();
    expect(() => lottoMaker.makeLotto(price)).toThrow(inValidMessages.priceUnit);
  })
});
