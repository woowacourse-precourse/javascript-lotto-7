import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printPurchasedLotto(lottos) {
    const lottoCount = lottos.length;
    this.print(`\n${lottoCount}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printWinningDetails(winningDetails) {
    for (const element in winningDetails) {
      const info = winningDetails[element];
      let matchString = `${info.match}개 일치`;

      if (element === '2') {
        matchString += ', 보너스 볼 일치';
      }

      this.print(`${matchString} (${info.price.toLocaleString('ko-KR')}원) - ${info.count}개`);
    }
  }

  printWinningRate(rate) {
    this.print(`총 수익률은 ${rate}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}
