import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([6, 3, 1, 4, 5, 2]);
    expect(lotto.toString()).toBe("[1, 2, 3, 4, 5, 6]");
  });

  test("당첨 번호와 일치하는 번호의 개수를 올바르게 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.matchNumbers([1, 2, 3, 7, 8, 9], 10);
    expect(result.matchCount).toBe(3);
    expect(result.hasBonus).toBe(false);
  });

  test("5개 일치하고 보너스 번호도 일치하는 경우를 올바르게 판단한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const result = lotto.matchNumbers([1, 2, 3, 4, 5, 6], 7);
    expect(result.matchCount).toBe(5);
    expect(result.hasBonus).toBe(true);
  });
});
