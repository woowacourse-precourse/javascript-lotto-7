import LottoMatchChecker from "../src/LottoMatchChecker";
import Lotto from "../src/Lotto";

describe("LottoMatchChecker 클래스 테스트", () => {
  test("당첨번호와 일치하는 로또 번호의 개수를 구할 수 있다.", () => {
    const lotto = new Lotto([1, 3, 5, 7, 9, 10]);
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);

    expect(lottoMatchChecker.countMatchesIn(lotto)).toBe(6);
  });
});
