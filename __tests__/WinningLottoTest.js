import WinningLotto from "../src/models/WinningLotto";

describe("당첨 로또 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 보너스 보너가 중복 되면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 3);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 당첨 번호가 있을 경우, 당첨 관련 정보를 알 수 있다.", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 10);
    const expectedResult = {
      matchCount: 3,
      hasBonus: false,
    };
    expect(winningLotto.getMatchCount([1, 2, 3, 11, 22, 33])).toEqual(expectedResult);
  });
});
