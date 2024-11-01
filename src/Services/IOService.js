import { Console } from '@woowacourse/mission-utils';

class IOService {
  // await을 반복하게 쓰기 위해서 재귀로 짬. 위험할까?
  async getInputWhileValid(validator, promptMessage) {
    const input = await Console.readLineAsync(promptMessage);
    const validInput = validator(input);

    if (validInput) {
      return validInput;
    }
    return this.getInputWhileValid(validator, promptMessage);
  }

  printMessage(message) {
    Console.print(message);
  }

  printLotteries(lotteries) {
    lotteries.forEach((lotto) =>
      this.printMessage(`${lotto.toString(lotto.getNumbers())}`),
    );
  }

  printStatistics(rankCounts) {
    this.printMessage('당첨 통계\n---');
    this.printMessage(`3개 일치 (5,000원) - ${rankCounts.threeMatch.ticket}개`);
    this.printMessage(`4개 일치 (50,000원) - ${rankCounts.fourMatch.ticket}개`);
    this.printMessage(
      `5개 일치 (1,500,000원) - ${rankCounts.fiveMatch.ticket}개`,
    );
    this.printMessage(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts.fiveMatchWithBonus.ticket}개`,
    );
    this.printMessage(
      `6개 일치 (2,000,000,000원) - ${rankCounts.sixMatch.ticket}개`,
    );
  }

  printRevenueRate(totalRevenue, paidAmount) {
    const revenueRate = (totalRevenue / paidAmount) * 100;
    this.printMessage(`총 수익률은 ${revenueRate}%입니다.`);
  }
}

export default IOService;
