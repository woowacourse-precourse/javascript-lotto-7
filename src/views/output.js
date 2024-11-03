import { MissionUtils } from '@woowacourse/mission-utils';

export class Output {
  showPurchaseNumbers(count, purchaseNumbers) {
    let message = `\n${count}개를 구매했습니다.\n`;
    purchaseNumbers.forEach((numbers) => {
      message += `[${numbers.join(', ')}]\n`;
    });
    MissionUtils.Console.print(message);
  }

  printStatistics(statistics) {
    let message = '\n당첨 통계\n---\n';
    statistics.forEach((stat) => {
      const isBonus =
        stat.count === 5 && stat.isBonusMatch ? ', 보너스 볼 일치' : '';
      message += `${stat.count}개 일치${isBonus} (${stat.prize}) - ${stat.winnerCount}개\n`;
    });
    MissionUtils.Console.print(message);
  }

  printYield(yieldValue) {
    MissionUtils.Console.print(`총 수익률은 ${yieldValue.toFixed(1)}%입니다.`);
  }
}
