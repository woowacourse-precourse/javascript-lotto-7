import { Console } from "@woowacourse/mission-utils";

/**
 * @class Display
 * @description 로또 티켓과 당첨 결과를 출력하는 클래스
 */
class Display {
  /**
   * @description 구매한 로또 티켓을 출력
   * @param {number[][]} tickets - 구매한 로또 티켓 배열
   */
  displayTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      Console.print("[" + ticket.join(", ") + "]");
    }
  }

  /**
   * @description 당첨 통계를 출력
   * @param {object} totalRank - 등수별 당첨 개수 객체
   */
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

  /**
   * @description 수익률을 출력
   * @param {number} profitRate - 계산된 수익률 값
   */
  displayReturn(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Display;
