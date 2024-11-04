import Lotto from '../src/model/Lotto.js';
import LottoController from '../src/controller/LottoController.js';
import LottoTickets from '../src/model/LottoTickets.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.');
  });

  test('로또 번호가 1이상 45이하의 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.');

    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.');
  });

  test('로또 티켓 생성 함수 테스트', () => {
    const ticketCount1 = 1;
    const ticketCount2 = 100;

    const lottoTickets1 = new LottoTickets(ticketCount1);
    const lottoTickets2 = new LottoTickets(ticketCount2);

    const tickets1 = lottoTickets1.getTickets();
    const tickets2 = lottoTickets2.getTickets();

    expect(tickets1.length).toBe(ticketCount1);
    expect(tickets2.length).toBe(ticketCount2);

    tickets1.forEach((ticket) => {
      expect(ticket.length).toBe(6);
      ticket.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });
    });

    tickets2.forEach((ticket) => {
      expect(ticket.length).toBe(6);
      ticket.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });
    });
  });
});
