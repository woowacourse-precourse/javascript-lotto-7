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

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순으로 정렬되어 있지 않으면 정렬된다.", () => {
    const lotto = new Lotto([6, 3, 1, 4, 5, 2]);
    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("당첨 번호와 일치하는 번호의 개수를 올바르게 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.matchLottoNumbers(winningNumbers).matchCount).toBe(3);
  });

  test("보너스 번호와 일치하는지 올바르게 확인한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getLottoNumbers().includes(7)).toBeFalsy();
    expect(lotto.getLottoNumbers().includes(6)).toBeTruthy();
  });

  test("유효한 로또 번호로 객체가 정상적으로 생성된다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("로또 번호가 불변성을 유지한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = lotto.getLottoNumbers();
    numbers.push(7);
    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
