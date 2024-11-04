import Cost from "../../src/domain/Opportunity/Cost.js";
import { DOMAIN_ERRORS } from "../../src/constant/Error.js";

describe("Cost 도메인 테스트", () => {
  test("로또 금액이 1000원 단위가 아닐 경우 에러가 발생한다", () => {
    // given
    const invalidCost = 1500;

    // when & then
    expect(() => new Cost(invalidCost))
      .toThrow(DOMAIN_ERRORS.CHANGE_EXIST);
  });

  test("유효한 금액으로 Cost 객체를 생성하면 금액과 구매 개수가 정확히 계산된다", () => {
    // given
    const validCost = 5000;
    const expectedCount = 5;

    // when
    const cost = new Cost(validCost);

    // then
    expect(cost.cost).toBe(validCost);
    expect(cost.count).toBe(expectedCount);
  });
});
