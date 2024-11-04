import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있다면 true를 리턴한다.", () => {
    expect(Lotto.hasDuplicatedLottoNumber([1, 2, 3, 4, 5, 5])).toBe(true);
  });

  test("로또 번호에 중복된 숫자가 없다면 false를 리턴한다.", () => {
    expect(Lotto.hasDuplicatedLottoNumber([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test("번호에 1과 45 사이의 값이 아니면 true를 반환한다.", () => {
    expect(Lotto.isValidLottoNumberRange([46])).toBe(false);
  });

  test("번호에 1과 45 사이의 값이 있으면 false를 반환한다.", () => {
    expect(Lotto.isValidLottoNumberRange([4])).toBe(true);
  });
});
