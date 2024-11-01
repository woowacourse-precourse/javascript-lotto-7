import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printLotto(lottos) {
    const lottoCount = lottos.length;
    this.print(`\n${lottoCount}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printWinningInfo(winningInfo) {
    for (const element in winningInfo) {
      const info = winningInfo[element];
      let matchString = `${info.match}개 일치`;

      if (element === '2') {
        matchString += ', 보너스 볼 일치';
      }

      this.print(`${matchString} (${info.price.toLocaleString('ko-KR')}원) - ${info.count}개`);
    }
  }

  printRateOfReturn(rate) {
    this.print(`총 수익률은 ${rate}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}
