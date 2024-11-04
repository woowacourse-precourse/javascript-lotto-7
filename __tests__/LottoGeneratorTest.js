import LottoGenerator from "../src/utils/LottoGenerator.js";
import { LOTTO } from "../src/constants/constants.js";

describe("LottoGenerator 테스트", () => {
  test("로또 번호가 1에서 45 사이의 숫자로 구성된다.", () => {
    const tickets = LottoGenerator.generateTickets(1);
    tickets[0].forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(LOTTO.NUMBER_RANGE.MIN);
      expect(number).toBeLessThanOrEqual(LOTTO.NUMBER_RANGE.MAX);
    });
  });

  test("로또 번호는 6개의 숫자로 구성된다.", () => {
    const tickets = LottoGenerator.generateTickets(1);
    expect(tickets[0]).toHaveLength(LOTTO.NUMBER_COUNT);
  });

  test("로또 번호는 중복되지 않는다.", () => {
    const tickets = LottoGenerator.generateTickets(1);
    const uniqueNumbers = new Set(tickets[0]);
    expect(uniqueNumbers.size).toBe(LOTTO.NUMBER_COUNT);
  });
});
