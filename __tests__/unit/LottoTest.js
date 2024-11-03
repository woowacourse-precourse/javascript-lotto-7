import Lotto from "../../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]); 
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([3, 1, 6, 2, 5, 4]); 
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 양의 정수 값이 아닌 값이 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto(["a", 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([null, 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([undefined, 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([{}, 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]); 
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]); 
    }).toThrow("[ERROR]");
  });

  test("올바른 로또 번호 배열이 입력된 경우 예외가 발생하지 않아야 한다.", () => {
    expect(() => {
      new Lotto([1, 5, 12, 23, 34, 45]); 
    }).not.toThrow();
  });
});
