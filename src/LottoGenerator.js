import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGenerator {
    // 로또 티켓 가격
    static TICKET_PRICE = 1000;

    // 구입 금액에 맞춰 로또 티켓 생성
    generateTickets(purchaseAmount) {
        const ticketCount = Math.floor(purchaseAmount / LottoGenerator.TICKET_PRICE);
        const tickets = [];

        for (let i = 0; i < ticketCount; i++) {
            tickets.push(this.generateRandomTicket());
        }
        return tickets;
    }

    // 1에서 45 사이의 중복되지 않은 정수 6개 생성
    generateRandomTicket() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    // 티켓 수와 생성된 티켓을 출력
    printTickets(ticketCount, tickets) {
        MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);
        tickets.forEach((ticket) => {
            MissionUtils.Console.print(`[${ticket.join(', ')}]`);
        });
    }
}

export default LottoGenerator;
