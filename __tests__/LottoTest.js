import Lotto from "../src/Lotto.js";

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

  test('로또 번호가 1부터 45 사이의 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 일치하는 번호 개수를 올바르게 계산한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    const { matchCount } = lotto.match(winningNumbers, 10);
    expect(matchCount).toBe(3);
  });

  test('보너스 번호 일치 여부를 올바르게 판단한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const { hasBonus } = lotto.match(winningNumbers, 6);
    expect(hasBonus).toBe(true);
  });
});
