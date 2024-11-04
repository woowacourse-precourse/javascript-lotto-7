import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 5개 이하일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("쉼표의 위치가 적절하지 못할 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([, 1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([`a, b, c, d, e, f`]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 6, 8, 33, 47]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.2, 2.5, 6, 8, 33, 40]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
