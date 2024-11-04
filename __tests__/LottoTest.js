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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("번호 갯수가 6개보다 적을 때 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("문자열 등이 입력되면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, "s", 5]);
    }).toThrow("[ERROR]");
  });

  test("정수가 아닌 수가 입력되면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 22.5, 5]);
    }).toThrow("[ERROR]");
  });

  test("1~45 이외의 값이 입력되면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 55, 5]);
    }).toThrow("[ERROR]");
  });
});
