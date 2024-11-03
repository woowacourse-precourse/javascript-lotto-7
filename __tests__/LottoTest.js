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
  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, "a", 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45가 넘는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 111, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0 이하의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, -2, 3, 4, 11, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 등수 테스트", () => {
    const rank = new Lotto([1, 2, 3, 4, 11, 5]).getRank([1, 2, 3, 4, 11, 5], 7);
    expect(rank).toBe(1);
  });
});

