import { Console } from '@woowacourse/mission-utils';
import LottoChecker from './LottoChecker.js';

class LottoOutputWriter {
  printLottos(lottos) {
    this.#printLottoCount(lottos.length);
    this.#printLottoNumbers(lottos);
  }

  printWinningResult(winningResult) {
    Console.print('당첨 통계\n---\n');

    const output = [];
    for (let i = winningResult.length - 1; i >= 0; i--) {
      const { matchCount, prize, bonus } = LottoChecker.PRIZE_TIERS[i];
      output.push(
        this.#generateWinningResultMessage(
          matchCount,
          prize,
          bonus,
          winningResult[i]
        )
      );
    }

    Console.print(output.join('\n'));
  }

  printYield(totalYield) {
    Console.print(`총 수익률은 ${totalYield}%입니다.`);
  }

  #printLottoCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.\n`);
  }

  #printLottoNumbers(lottos) {
    const output = lottos.map((lotto) => `[${lotto.getNumbers().join(', ')}]`);
    Console.print(`${output.join('\n')}\n\n`);
  }

  #generateWinningResultMessage(matchCount, prize, bonus, count) {
    if (matchCount === 5 && bonus) {
      return `${matchCount}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`;
    }
    return `${matchCount}개 일치 (${prize}원) - ${count}개`;
  }
}

export default LottoOutputWriter;
