import RankChecker from "../src/RankChecker";

describe("RankChecker 클래스 반환값 확인 테스트", () => {
  const purchasedLottos = [
    [8, 21, 35, 10, 3, 15],
    [42, 19, 6, 33, 7, 23],
  ];
  const winningAndBonusNumber = [[3, 8, 15, 21, 35, 10], 42];

  let result;

  beforeEach(() => {
    // when
    result = RankChecker.checkMatch(purchasedLottos, winningAndBonusNumber);
  });

  test("checkMatch는 맞은 개수와 보너스 번호 일치 여부를 반환해야 한다.", () => {
    // then
    expect(result).toStrictEqual([
      [6, false],
      [0, true],
    ]);
  });

  test("getRank는 일치 여부에 따른 결과 객체를 반환해야 한다.", () => {
    expect(RankChecker.getRank(result)).toStrictEqual({
      FIRST_PLACE: 1,
      SECOND_PLACE: 0,
      THIRD_PLACE: 0,
      FOURTH_PLACE: 0,
      FIFTH_PLACE: 0,
      SIXTH_PLACE: 1,
    });
  });
});
