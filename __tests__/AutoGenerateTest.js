import AutoGenerate from "../src/Model/AutoGenerate.js"

const GENERATOR = new AutoGenerate(3000);
const TICKETS = GENERATOR.lotto_tickets[0];

describe("AutoGenerate 클래스 테스트", () => {
  test("구입 금액에 맞게 로또 티켓 수가 생성된다.", () => {
    expect(GENERATOR.purchaseNumber).toBe(3);
    expect(GENERATOR.lotto_tickets.length).toBe(3);
  });

  test("생성된 로또 티켓은 각 번호가 1~45 범위 내의 중복되지 않은 6개 숫자로 구성된다.", () => {
    expect(TICKETS.length).toBe(6);
    TICKETS.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(45);
    });
    expect(new Set(TICKETS).size).toBe(6);
  });

  test("생성된 로또 티켓이 오름차순이다.", () => {
    for (let i = 1; i < 6; i++) {
      expect(TICKETS[i - 1]).toBeLessThanOrEqual(TICKETS[i]);
    }
  });
});