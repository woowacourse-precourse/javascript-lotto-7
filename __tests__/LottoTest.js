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

  test("getMatchedCount 메서드는 맞춘 번호의 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.getMatchedCount(winningNumbers)).toBe(3);
  });

  test("hasBonusNumber 메서드는 보너스 번호가 포함되어 있는지 여부를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 6;
    expect(lotto.hasBonusNumber(bonusNumber)).toBe(true);
  });
});
