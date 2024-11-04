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
  test("빈 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR]")
  });

  test("로또 번호는 1 ~ 45 사이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]")
  });

  test("유효한 로또 번호 입력 시 에러가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 12, 23, 34, 45, 6]);
    }).not.toThrow();
  });

  test("소수점이 포함된 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow("[ERROR]");
  });

  test("음수가 포함된 로또 번호는 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

});
