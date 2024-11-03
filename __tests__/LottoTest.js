import Lotto from "../src/model/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
  });

  test("로또 번호가 없다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR] 입력값이 없습니다.");
  });

  test("로또 번호가 숫자 타입이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["a", 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 입력값이 숫자 타입이 아닙니다.");
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
});
