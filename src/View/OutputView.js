import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  async printOutput(string) {
    MissionUtils.Console.print(string);
  }

  printLottoNumbers(lottoQuantity, lottos) {
    this.printOutput(`${lottoQuantity}개를 구매했습니다.`);
    lottos.map(lotto => {
      this.printOutput(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printWinningStatistics(totalWinningRank) {
    this.printOutput('당첨 통계');
    this.printOutput('---');

    const prize = [
      { rank: '6개 일치', amount: '2,000,000,000' },
      { rank: '5개 일치, 보너스 볼 일치', amount: '30,000,000' },
      { rank: '5개 일치', amount: '1,500,000' },
      { rank: '4개 일치', amount: '50,000' },
      { rank: '3개 일치', amount: '5,000' },
    ];

    for (let i = totalWinningRank.length - 1; i >= 0; i--) {
      const count = totalWinningRank[i];

      this.printOutput(`${prize[i].rank} (${prize[i].amount}원) - ${count}개`);
    }
  }

}

export default OutputView;
