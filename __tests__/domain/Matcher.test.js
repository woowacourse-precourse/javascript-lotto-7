import Matcher from "../../src/domain/MyLotto/Matcher.js";

describe("Matcher 도메인 테스트", () => {
  test("당첨 번호와 일치하는 번호의 개수를 정확히 계산한다", () => {
    // given
    const myLotto = [1, 2, 3, 4, 5, 6];
    const winningLotto = {
      numbers: [1, 2, 3, 7, 8, 9],
      bonusNumber: 10,
    };

    // when
    const matcher = new Matcher(myLotto, winningLotto);

    // then
    expect(matcher.matchCount).toBe(3);
    expect(matcher.bonusMatch).toBe(0);
  });

  test("보너스 번호 일치 여부를 정확히 판단한다", () => {
    // given
    const myLotto = [1, 2, 3, 4, 5, 6];
    const winningLotto = {
      numbers: [7, 8, 9, 10, 11, 12],
      bonusNumber: 6,
    };

    // when
    const matcher = new Matcher(myLotto, winningLotto);

    // then
    expect(matcher.matchCount).toBe(0);
    expect(matcher.bonusMatch).toBe(1);
  });
});
