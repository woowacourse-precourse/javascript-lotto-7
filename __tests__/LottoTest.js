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

  test.each([
    [[1, 2, 3, 4, 5, 6], 0],
    [[1, 2, 3, 4, 5, 6], 8100],
    [[1, 2, 3, 4, 5, 6], -1000],
    [[1, 2, 3, 4, 5, 6], "-1000"],
    [[1, 2, 3, 4, 5, 6], "1000원"],
    [[1, 2, 3, 4, 5, 6], "3,1000"],
  ])("checkPurchase(%s, %s) returns %s", (list, purchase) => {
    expect(() => {
      new Lotto(list).checkPurchase(purchase);
    }).toThrow("[ERROR]");
  });
});
