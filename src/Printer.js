import { Console } from "@woowacourse/mission-utils";

// 출력을 처리하는 클래스
class Printer {
  // 로또 구매 내역 출력
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  // 당첨 통계 출력
  printWinningStats(stats) {
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${stats[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${stats[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${stats[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats["5_bonus"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${stats[6]}개`);
  }

  // 수익률 출력
  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default Printer;
