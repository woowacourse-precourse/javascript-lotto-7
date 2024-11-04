import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  describe.each([
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5],
    [, 1, 2, 3, 4, 5, 6],
    [`a, b, c, d, e, f`],
    [1, 2, 6, 8, 33, 47],
    [1.2, 2.5, 6, 8, 33, 40],
    [1, 2, 3, 4, 5, 5],
  ])("로또 번호 유효성 검사: %j", (numbers) => {
    test("예외 발생", () => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow("[ERROR]");
    });
  });
});
