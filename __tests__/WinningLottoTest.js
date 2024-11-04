import { WinningLotto } from "../src/WinningLotto";

describe("WinningLotto 클래스 테스트", () => {
  test("WinningLotto가 정상적으로 생성된다.", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    expect(winningLotto.winningLotto).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningLotto.bonusNumber).toBe(7);
  });
});
