import { Console } from "@woowacourse/mission-utils";

export class OutputManager {
  static printLotteryPurchase(lotteryGroup) {
    Console.print(`\n${lotteryGroup.length}개를 구매했습니다.`);
    lotteryGroup.forEach((lotto) => {
      Console.print(`[${lotto.getLottoNumbers().join(", ")}]`);
    });
  }

  static printLottoStatistic(lottoManager, inputMoney, winningNumbers, bonusNumber) {
    Console.print("\n당첨 통계");
    Console.print("---");

    const result = lottoManager.calculatePrize(winningNumbers, bonusNumber);
    result.forEach((prize) => {
      const { reward, desc, count } = prize;
      Console.print(`${desc} (${this.formatCurrency(reward)}원) - ${count}개`);
    });

    Console.print(`총 수익률은 ${lottoManager.calculateROI(inputMoney)}입니다.`);
  }

  static formatCurrency(money) {
    return money.toLocaleString();
  }
}
