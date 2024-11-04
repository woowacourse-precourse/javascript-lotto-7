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

  test("6개 번호가 일치하면 1 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getResult([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test("5개 번호와 보너스 번호가 일치하면 2 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getResult([1, 2, 3, 4, 5, 9], 6)).toBe(2);
  });

  test("5개 번호만 일치하면 3 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(lotto.getResult([1, 2, 3, 4, 5, 10], 7)).toBe(3);
  });

  test("4개 번호가 일치하면 4 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 9, 10]);
    expect(lotto.getResult([1, 2, 3, 4, 15, 20], 7)).toBe(4);
  });

  test("3개 번호가 일치하면 5 반환", () => {
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    expect(lotto.getResult([1, 2, 3, 15, 20, 25], 7)).toBe(5);
  });

  test("일치하는 번호가 2개 이하일 경우 -1 반환", () => {
    const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
    expect(lotto.getResult([3, 4, 5, 6, 7, 12], 7)).toBe(-1);
  });
});
