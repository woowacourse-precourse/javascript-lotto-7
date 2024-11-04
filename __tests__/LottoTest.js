import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  // 번호 개수가 6개가 아니면 예외 발생
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // 중복된 번호가 있으면 예외 발생
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 번호가 1~45 범위를 벗어나면 예외 발생
  test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([46, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  // getNumbers 메서드가 번호를 올바르게 반환하는지 테스트
  test("getNumbers 메서드는 로또 번호를 올바르게 반환해야 한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // getMatchCount 메서드 테스트
  test("getMatchCount 메서드는 일치하는 번호의 개수를 올바르게 반환해야 한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.getMatchCount(winningNumbers)).toBe(3);
  });

  // hasBonusNumber 메서드 테스트
  test("hasBonusNumber 메서드는 보너스 번호를 올바르게 확인해야 한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(3)).toBe(true);
    expect(lotto.hasBonusNumber(7)).toBe(false);
  });
});
