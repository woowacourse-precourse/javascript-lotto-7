import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });


  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 숫자가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 47, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  })

  test("로또 번호로 숫자가 아닌 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['a', 'b', 1, 2, 3, 4]);
    }).toThrow("[ERROR]");
  })
});
