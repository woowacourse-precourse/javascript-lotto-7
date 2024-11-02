import { Console } from '@woowacourse/mission-utils';

class OutputHandler {
  static print(output) {
    Console.print(output);
  }

  static printResultOutPut(rankAndCount) {
    let outputString = '';
    rankAndCount.forEach((rankNcount) => {
      const money = this.setOutputMoney(rankNcount.rank);
      const count = this.setOutputCount(rankNcount.rank);
      outputString += `${count} (${money}) - ${rankNcount.count}개\n`;
    });
    this.print(outputString);
  }

  static printProfitRate(rankList) {
    let moeny = 0;
    rankList.forEach((rank) => {
      moeny += this.setMoney(rank);
    });
    const profit = moeny / rankList.length;
    const roundedProfit = parseFloat(profit.toFixed(2));
    this.print(roundedProfit);
  }

  setMoney(rank) {
    switch (rank) {
      case 1:
        return 2000000000;
      case 2:
        return 30000000;
      case 3:
        return 1500000;
      case 4:
        return 50000;
      case 5:
        return 5000;
      default:
        return 0;
    }
  }

  setOutputMoney(rank) {
    switch (rank) {
      case 1:
        return '2,000,000,000원';
      case 2:
        return '30,000,000원';
      case 3:
        return '1,500,000원';
      case 4:
        return '50,000원';
      case 5:
        return '5,000원';
      default:
        return 0;
    }
  }

  setOutputCount(rank) {
    switch (rank) {
      case 1:
        return '6개 일치';
      case 2:
        return '5개 일치 , 보너스 볼 일치';
      case 3:
        return '5개 일치';
      case 4:
        return '4개 일치';
      case 5:
        return '3개 일치';
      default:
        return 0;
    }
  }
}
export default OutputHandler;
