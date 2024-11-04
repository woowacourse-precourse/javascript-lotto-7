import LottoResult from "../src/LottoResult.js";

describe("로또 클래스 테스트", () => {
  const myLotto = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];
  const winningLotto = { win: [1, 2, 3, 4, 5, 12], bonus: 6 };

  test("로또 결과 계산 테스트", () => {
    const lottoResult = new LottoResult(myLotto);
    lottoResult.start(winningLotto);
    lottoResult.generateStatistics();
    expect(lottoResult.reward).toBe(60000000);
  });
});
