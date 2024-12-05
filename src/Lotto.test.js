import Lotto from "../src/Lotto.js";

describe("Lotto 클래스 테스트", () => {
  test("로또 번호가 6개가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 5]);
      lotto.isDuplicate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호에 중복된 값이 존재합니다. 다시 입력해주세요.");
  });

  test("로또 번호가 6개이고 중복되지 않은 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.isDuplicate([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
