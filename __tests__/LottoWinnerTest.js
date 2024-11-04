import LottoWinner from "../src/domain/LottoWinner.js";
import Lotto from "../src/domain/Lotto.js";

describe("LottoWinner 클래스 테스트", () => {
  test("보너스 번호 중복 예외 테스트", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when & then
    expect(() => {
      new LottoWinner(winningNumbers, 1);
    }).toThrow("[ERROR]");
  });

  describe("당첨 등수 계산", () => {
    test("1등 당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(1);
    });

    test("2등 당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(2);
    });

    test("3등 당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(3);
    });

    test("4등 당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 8, 9]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(4);
    });

    test("5등 당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(5);
    });

    test("미당첨 테스트", () => {
      // given
      const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 8, 9, 10, 11]);

      // when
      const rank = winner.matchRate(lotto);

      // then
      expect(rank).toBe(0);
    });
  });
});
