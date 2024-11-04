import { Console, Random } from "@woowacourse/mission-utils";
import { getTicketCount, getWinningNumbers, getBonusNumber } from "./utils/InputHandler.js";

class App {
  async run() {
    // 구입금액 입력받음
    const ticketCount = await getTicketCount();

    // 티켓 생성
    Console.print(`\n${ticketCount}개를 구매했습니다.`);

    const tickets = generateTickets(ticketCount);
    tickets.forEach(ticket => {
      Console.print(`[${ticket.join(", ")}]`);
    });

    // 당첨번호, 보너스 번호 입력받음
    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber(winningNumbers);

    // 당첨 통계 계산, 출력
    const prizeResults = countPrizeResults(tickets, winningNumbers, bonusNumber);
    showStatistics(prizeResults, ticketCount)
  }
}

export default App;


function generateTickets(ticketCount) {
  const tickets = [];

  for (let i = 0; i < ticketCount; i++) {
    let ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    ticket = ticket.sort((a, b) => a - b);
    tickets.push(ticket);
  }

  return tickets;
}

function countPrizeResults(tickets, winningNumbers, bonusNumber) {
  const prizeResults = {
    '3': 0,
    '4': 0,
    '5': 0,
    '5+bonus': 0,
    '6': 0
  }

  tickets.forEach(ticket => {
    const matchCount = ticket.filter(num => winningNumbers.includes(num)).length;
    const hasBonus = ticket.includes(bonusNumber);

    if (matchCount == 6) {
      prizeResults['6']++;
    } else if (matchCount == 5 && hasBonus) {
      prizeResults['5+bonus']++;
    } else if (matchCount == 5) {
      prizeResults['5']++;
    } else if (matchCount == 4) {
      prizeResults['4']++;
    } else if (matchCount == 3) {
      prizeResults['3']++;
    }
  })

  return prizeResults;
}

function showStatistics(prizeResults) {
  Console.print('\n당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${prizeResults['3']}개`);
  Console.print(`4개 일치 (50,000원) - ${prizeResults['4']}개`);
  Console.print(`5개 일치 (1,500,000원) - ${prizeResults['5']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeResults['5+bonus']}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${prizeResults['6']}개`);
}