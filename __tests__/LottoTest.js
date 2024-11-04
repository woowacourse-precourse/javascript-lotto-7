import Lotto from "../src/lotto/Lotto";

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

  test("로또 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("올바른 로또 번호가 생성된다.", () => {
    const lotto = new Lotto([5, 12, 23, 32, 38, 42]);
    expect(lotto.getNumbers()).toEqual("[5, 12, 23, 32, 38, 42]");
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([42, 5, 32, 23, 12, 38]);
    expect(lotto.getNumbers()).toEqual("[5, 12, 23, 32, 38, 42]");
  });
});
