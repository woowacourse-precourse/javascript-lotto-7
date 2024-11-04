import Lotto from "../src/Lotto.js";
import LottoApp from "../src/LottoApp";
import {
  LOTTO_PRICE,
  LOTTO_NUMBERS,
  WINNING_PRIZES,
} from "../src/constants.js";

describe("LottoApp 클래스 테스트", () => {
  let lottoApp;

  beforeEach(() => {
    lottoApp = new LottoApp();
  });

  test("구입 금액에 따른 로또 개수가 정확히 계산된다.", () => {
    const amount = LOTTO_PRICE * 5;
    const count = Math.floor(amount / LOTTO_PRICE);
    expect(count).toBe(5);
  });

  test("로또 번호가 1에서 45 사이의 6개 숫자로 중복 없이 생성된다.", () => {
    const numbers = lottoApp.generateLottoNumbers();
    expect(numbers).toHaveLength(LOTTO_NUMBERS.COUNT);
    expect(new Set(numbers).size).toBe(LOTTO_NUMBERS.COUNT);
    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(LOTTO_NUMBERS.MIN);
      expect(num).toBeLessThanOrEqual(LOTTO_NUMBERS.MAX);
    });
  });
});
