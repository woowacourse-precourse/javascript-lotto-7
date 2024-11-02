import { Console } from "@woowacourse/mission-utils";

class WinningStatistics {
  constructor(winning) {
    this.winning = winning;
    this.prize = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
  }

  printReturnRate(payment) {
    const totalPrize = Object.entries(this.winning).reduce(
      (total, [rank, count]) => {
        return total + count * this.prize[rank];
      },
      0
    );
    const returnRate = (totalPrize / payment * 100).toFixed(1);

    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  printStatistics() {
    Console.print("당첨 통계\n---");

    Object.entries(this.winning).forEach(([rank, count]) => {
      if (rank == 5.5) {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${this.prize[rank].toLocaleString()}원) - ${count}개`
        );
      } else {
        Console.print(
          `${rank}개 일치 (${this.prize[rank].toLocaleString()}원) - ${count}개`
        );
      }
    });
  }
}

export default WinningStatistics;
