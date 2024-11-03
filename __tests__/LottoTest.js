import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6, 7]],
    [[1, 2, 3, 4, 5, 5]],
    [[1, 2, 3, 4, 5, -5]],
    [[1, 2, 3, 4, 5, 0]],
    [[1, 2, 3, 4, 5, 46]],
    [[1, 2, 3, 4, 5, 7.1]],
  ])("areLottoNumbers(%s) returns %s", (list) => {
    expect(() => {
      new Lotto(list);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 5],
    [[1, 2, 3, 4, 5, 6], 46],
    [[1, 2, 3, 4, 5, 6], 0],
    [[1, 2, 3, 4, 5, 6], 7.1],
    [[1, 2, 3, 4, 5, 6], -5],
  ])("areBonusNumbers(%s) returns %s", (list) => {
    expect(() => {
      new Lotto(list[0]).addBonusDraw(list[1]);
    }).toThrow("[ERROR]");
  });
});
