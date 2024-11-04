import Opportunity from "../../src/domain/Opportunity/Opportunity.js";

describe("Opportunity 도메인 테스트", () => {
  test("당첨금 대비 구매 금액으로 수익률을 정확히 계산한다", () => {
    // given
    const opportunity = new Opportunity(5000);

    // when
    const rate = opportunity.calculateRate(55_000, 5000);

    // then
    expect(rate).toBe(1100);
  });
});
