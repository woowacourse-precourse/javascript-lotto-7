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

  test("로또 번호가 1부터 45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("정상적인 로또 번호 배열이 생성될 때 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("getNumbers 메서드는 로또 번호 배열을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("isIncludingNumber 메서드는 번호가 포함되어 있는지 여부를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.isIncludingNumber(3)).toBe(true);
    expect(lotto.isIncludingNumber(7)).toBe(false);
  });

  test("matches 메서드는 주어진 배열과 일치하는 번호의 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.matches([1, 2, 7, 8, 9, 10])).toBe(2);
    expect(lotto.matches([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(lotto.matches([10, 20, 30, 40, 41, 42])).toBe(0);
  });
});
