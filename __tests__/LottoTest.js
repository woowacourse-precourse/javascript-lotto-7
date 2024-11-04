import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    const TEST_VALUE = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7]];
    TEST_VALUE.forEach(value => {
      expect(() => new Lotto(value)).toThrow("[ERROR]");
    });
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const TEST_VALUE = [[1, 2, 3, 4, 5, 5]];
    TEST_VALUE.forEach(value => {
      expect(() => new Lotto(value)).toThrow("[ERROR]");
    });
  });

  test("당첨 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const TEST_VALUE = [[0, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 46]];
    TEST_VALUE.forEach(value => {
      expect(() => new Lotto(value)).toThrow("[ERROR]");
    });
  });
});
