import LottoGenerator from "../src/LottoGenerator.js";

describe("LottoGenerator 클래스 테스트", () => {
  const purchaseAmounts = [
    { amount: 1000, lottoQuantity: 1 },
    { amount: 5000, lottoQuantity: 5 },
    { amount: 15000, lottoQuantity: 15 },
  ];

  purchaseAmounts.forEach(({ amount, lottoQuantity }) => {
    let lottoGenerator;
    let tickets;

    beforeEach(() => {
      lottoGenerator = new LottoGenerator(amount);
      tickets = lottoGenerator.getLottoData().ticketList;
    });

    test(`로또 구매 금액 ${amount}에 따라 발행되는 로또 개수가 ${lottoQuantity}개여야 한다.`, () => {
      expect(tickets.length).toBe(lottoQuantity);
    });

    test("각 발행된 티켓은 반드시 6개의 숫자를 포함해야 한다.", () => {
      tickets.forEach((ticket) => {
        expect(ticket.length).toBe(6);
      });
    });

    test("모든 티켓의 숫자는 1부터 45 사이여야 한다.", () => {
      tickets.forEach((ticket) => {
        ticket.forEach((number) => {
          expect(number).toBeGreaterThan(0);
          expect(number).toBeLessThan(46);
        });
      });
    });

    test("로또 티켓이 모두 고유한 숫자 조합인지 확인한다.", () => {
      const ticketSet = new Set(tickets.map((ticket) => ticket.join(",")));
      expect(ticketSet.size).toBe(tickets.length);
    });

    test("모든 티켓의 숫자는 반드시 숫자 타입이어야 한다.", () => {
      tickets.forEach((ticket) => {
        ticket.forEach((number) => {
          expect(Number.isInteger(number)).toBe(true);
        });
      });
    });

    test("모든 티켓은 숫자가 오름차순으로 정렬되어 있어야 한다.", () => {
      tickets.forEach((ticket) => {
        expect(ticket).toEqual(
          [...ticket].sort(
            (firstNumber, secondNumber) => firstNumber - secondNumber
          )
        );
      });
    });
  });
});
