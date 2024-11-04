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

  test("로또 번호에 범위를 넘어선 숫자가 있으면 예외가 발생한다.", () => {
    const inputs = [
      [45, 5, 3, 2, 4, 0],
      [46, 5, 3, 2, 4, 1],
    ];

    inputs.forEach((input) => {
      expect(() => new Lotto(input)).toThrow("[ERROR]");
    });
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 번호를 오름차순으로 정렬할 수 있다.", () => {
    const lotto = new Lotto([6, 5, 3, 2, 4, 1]);

    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("당첨 번호와 일치하는 숫자가 있으면 true를 리턴할 수 있다.", () => {
    const lotto = new Lotto([6, 5, 3, 2, 4, 1]);

    expect(lotto.contains(6)).toBeTruthy();
  });

  test("당첨 번호와 일치하는 숫자가 없으면 false를 리턴할 수 있다.", () => {
    const lotto = new Lotto([6, 5, 3, 2, 4, 1]);

    expect(lotto.contains(7)).toBeFalsy();
  });
});
