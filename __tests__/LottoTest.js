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

  test("로또 번호에 1~45가 아닌 번호가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 51]);
    }).toThrow("[ERROR]");
  });

  test("유효한 생성 번호 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 8]);
  });
});
