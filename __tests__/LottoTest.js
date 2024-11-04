import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[0, 1, 2, 3, 4, 5], "1보다 작은 숫자"],
    [[1, 2, 3, 4, 5, 46], "45보다 큰 숫자"],
  ])("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다. (%s)", (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 오름차순으로 정렬되어야 한다.", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 인스턴스의 숫자는 변경할 수 없다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = lotto.getNumbers();
    numbers[0] = 7;
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  describe("당첨 번호 비교 테스트", () => {
    test("6개 번호가 모두 일치하는 경우", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const result = lotto.match([1, 2, 3, 4, 5, 6], 7);
      expect(result.matchCount).toBe(6);
      expect(result.hasBonus).toBe(false);
    });

    test("5개 번호와 보너스 번호가 일치하는 경우", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const result = lotto.match([1, 2, 3, 4, 5, 6], 7);
      expect(result.matchCount).toBe(5);
      expect(result.hasBonus).toBe(true);
    });

    test("5개 번호만 일치하는 경우", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
      const result = lotto.match([1, 2, 3, 4, 5, 6], 7);
      expect(result.matchCount).toBe(5);
      expect(result.hasBonus).toBe(false);
    });
  });
});
