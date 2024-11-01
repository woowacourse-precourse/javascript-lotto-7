import LottoTicketsGenerator from "../src/LottoTicketsGenerator";

describe("로또 번호 테스트", () => {
  let generator;

  beforeEach(() => {
    generator = new LottoTicketsGenerator();
  });

  test("생성된 번호의 개수가 6개여야 한다.", () => {
    const ticket = generator.generateSingleTicket();
    expect(ticket).toHaveLength(6);
  });

  test("모든 번호는 1~45 사이의 숫자여야 한다.", () => {
    const ticket = generator.generateSingleTicket();
    ticket.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });

  test("생성된 번호는 중복이 없어야 한다.", () => {
    const ticket = generator.generateSingleTicket();
    const uniqueNumbers = new Set(ticket);
    expect(uniqueNumbers.size).toBe(6);
  });

  test("생성된 번호는 오름차순으로 정렬되어 있어야 한다.", () => {
    const ticket = generator.generateSingleTicket();
    const sortedTicket = [...ticket].sort((a, b) => a - b);
    expect(ticket).toEqual(sortedTicket);
  });

  test("로또 티켓의 개수만큼 생성되어야한다.", () => {
    const tickets = generator.generateAllTickets(6);
    expect(tickets.length).toBe(6);
  });
})