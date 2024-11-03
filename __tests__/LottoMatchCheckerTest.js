import LottoMatchChecker from "../src/LottoMatchChecker";
import Lotto from "../src/Lotto";

describe("LottoMatchChecker 클래스 테스트", () => {
  test("당첨번호와 일치하는 로또 번호의 개수를 구할 수 있다.", () => {
    const lotto = new Lotto([1, 3, 5, 7, 9, 10]);
    const lottoMatchChecker = new LottoMatchChecker();

    expect(lottoMatchChecker.countMatches([1, 3, 5, 7, 9, 10], lotto)).toBe(6);
  });

  test("보너스 번호와 일치하는 로또 번호가 존재하면 true를 리턴할 수 있다.", () => {
    const lotto = new Lotto([1, 3, 5, 7, 9, 4]);
    const lottoMatchChecker = new LottoMatchChecker();

    expect(lottoMatchChecker.hasBonusNumber(4, lotto)).toBeTruthy();
  });

  test("보너스 번호와 일치하는 로또 번호가 없으면 false를 리턴할 수 있다.", () => {
    const lotto = new Lotto([1, 3, 5, 7, 9, 44]);
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);

    expect(lottoMatchChecker.hasBonusNumber(4, lotto)).toBeFalsy();
  });
});
