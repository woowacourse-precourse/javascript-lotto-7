import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호에 중복이 있습니다.");
  });

  test("정상적으로 값을 반환하는 지 확인한다.", () => {
    const INPUT = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(INPUT.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
