import { Console } from "@woowacourse/mission-utils";

class Display {
  displayTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      Console.print("[" + ticket.join(", ") + "]");
    }
  }

  displayRankNumber(totalRank) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${totalRank[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${totalRank[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${totalRank[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalRank[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${totalRank[1]}개`);
  }

  displayReturn(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Display;
