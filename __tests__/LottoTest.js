import Lotto from "../src/models/Lotto";

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

  test("로또 번호는 1부터 45 사이의 숫자만 포함해야 한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 46, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("유효한 로또 번호는 예외 없이 생성된다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
