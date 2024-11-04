import Lotto from "../src/Lotto";

describe("로또 클래스 테스트 - 예외 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호의 개수가 6개가 안되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

  //프로덕션 코드
  describe("로또 클래스 테스트 - 정상 테스트", () => {
  test("정상적인 로또 번호 1",() => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow("[ERROR]");
  });

  test("정상적인 로또 번호 2",() => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 45]);
    }).not.toThrow("[ERROR]");
  });

  test("정상적인 로또 번호 3",() => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 45]);
    }).not.toThrow("[ERROR]");
  });

});