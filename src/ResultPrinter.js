import ConsoleUtil from "./utils/ConsoleUtil.js";

export default class ResultPrinter {
  static printResults(results, lottoCount) {
    const prizeMap = {
      3: { amount: 5000, label: "3개 일치 (5,000원)" },
      4: { amount: 50000, label: "4개 일치 (50,000원)" },
      5: { amount: 1500000, label: "5개 일치 (1,500,000원)" },
      "5_bonus": { amount: 30000000, label: "5개 일치, 보너스 볼 일치 (30,000,000원)" },
      6: { amount: 2000000000, label: "6개 일치 (2,000,000,000원)" },
    };

    ConsoleUtil.print("당첨 통계\n---");
    let totalEarnings = 0;

    Object.keys(prizeMap).forEach((key) => {
      const count = results[key] || 0;
      const prize = prizeMap[key];
      totalEarnings += count * prize.amount;
      ConsoleUtil.print(`${prize.label} - ${count}개`);
    });

    const investment = lottoCount * 1000;
    const profitRate = ((totalEarnings / investment) * 100).toFixed(1);
    ConsoleUtil.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}
