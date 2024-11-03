import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test("당첨 번호와 6개 일치시 1등 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test("당첨 번호와 5개 + 보너스 번호 일치시 2등 반환 ", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(2);
  });

  test("당첨 번호와 5개 일치시 3등 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(3);
  });

  test("당첨 번호와 4개 일치시 4등 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 9, 10]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(4);
  });

  test("당첨 번호와 3개 일치시 5등 반환", () => {
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(5);
  });

  test("당첨 번호와 3개 미만 일치시 0 반환", () => {
    const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
    expect(lotto.getLottoRank([1, 2, 3, 4, 5, 6], 7)).toBe(0);
  });
});
