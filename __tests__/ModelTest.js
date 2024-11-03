import Model from "../src/Model";
import Lotto from "../src/Lotto";
import { LOTTO_PRICE } from "../src/constants";

describe("Model 클래스 테스트", () => {
  let model;

  beforeEach(() => {
    model = new Model();
  });

  test("로또 결과를 올바르게 계산한다.", () => {
    // Given: 로또 목록과 당첨 번호, 보너스 번호가 주어졌을 때
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    // When: 결과를 계산하면
    const results = model.getResults(lottos, winningNumbers, bonusNumber);

    // Then: 각 등수의 당첨 개수가 올바른지 확인한다
    expect(results[1]).toBe(0); // 6개 일치
    expect(results[2]).toBe(0); // 5개 + 보너스 일치
    expect(results[3]).toBe(0); // 5개 일치
    expect(results[4]).toBe(0); // 4개 일치
    expect(results[5]).toBe(1); // 3개 일치
    expect(results[6]).toBe(7); // 나머지
  });

  test("수익률을 올바르게 계산한다.", () => {
    // Given: 당첨 결과와 구매 금액이 주어졌을 때
    const results = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
      6: 0,
      0: 7,
    };
    const purchaseMoney = 8000;

    // When: 수익률을 계산하면
    const profitRate = model.getProfitRate(results, purchaseMoney);

    // Then: 수익률이 올바른지 확인한다
    expect(profitRate).toBe("62.5");
  });
});
