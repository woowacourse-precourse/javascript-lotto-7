import Lotto from "../src/models/Lotto.js";

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

  const invalidLottoNums = [
    [1, 2, 3, 4, 5, "@#"],
    [1, 2, 3, 4, 5, "5#"],
    [1, 2, 3, 4, 5, "a"],
    [1, 2, 3, 4, 5, "a"],
    [1, 2, 3, 4, 5, "a1"],
  ];
  test.each(invalidLottoNums)(
    "로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.",
    () => {
      (numbers) =>
        expect(() => {
          new Lotto(numbers);
        }).toThrow("[ERROR]");
    }
  );
});
