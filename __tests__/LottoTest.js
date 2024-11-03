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

  test("기능 테스트: 등수 반환하기", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const rank = lotto.calculateRank([1, 2, 3, 4, 5, 7], 8);
    
    expect(rank).toBe(3);
  });
});
