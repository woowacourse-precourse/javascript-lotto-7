import { generateLottoTickets } from "../src/Services/generateLottoTickets.js";
import Lotto from "../src/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

describe("generateLottoTickets 함수 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("입력된 금액에 따라 올바른 개수의 로또 티켓이 생성된다", () => {
    const price = 5000; // 5000원이면 5개의 티켓이 생성되어야 함
    const { ticketCount, tickets } = generateLottoTickets(price);

    expect(ticketCount).toBe(5);
    expect(tickets.length).toBe(5);
    tickets.forEach((ticket) => {
      expect(ticket).toBeInstanceOf(Lotto);
      expect(ticket.getNumbers().length).toBe(6);
    });
  });

  test("생성된 티켓의 번호가 오름차순으로 정렬되어 있는지 확인", () => {
    const price = 1000;
    const { tickets } = generateLottoTickets(price);
    tickets.forEach((ticket) => {
      const numbers = ticket.getNumbers();
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      expect(numbers).toEqual(sortedNumbers); // 정렬 여부 확인
    });
  });

  test("무작위 숫자가 1~45 범위 내에서 고유한 숫자 6개로 생성되는지 확인", () => {
    jest
      .spyOn(Random, "pickUniqueNumbersInRange")
      .mockReturnValue([3, 7, 12, 25, 33, 44]);

    const { tickets } = generateLottoTickets(1000);
    const numbers = tickets[0].getNumbers();

    expect(numbers).toEqual([3, 7, 12, 25, 33, 44]);
    expect(new Set(numbers).size).toBe(6); // 중복 없는지 확인
    expect(numbers.every((num) => num >= 1 && num <= 45)).toBe(true); // 범위 내 숫자인지 확인
  });
});
