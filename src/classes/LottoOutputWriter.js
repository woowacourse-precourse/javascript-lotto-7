import { Console } from '@woowacourse/mission-utils';
import LottoChecker from './LottoChecker.js';

class LottoOutputWriter {
  static printLottos(lottos) {
    this.#printLottoCount(lottos.length);
    this.#printLottoNumbers(lottos);
  }

  static printWinningResults(winningResults) {
    Console.print('\n당첨 통계\n---');

    for (let i = winningResults.length - 1; i >= 0; i--) {
      const { matchCount, prize, bonus } = LottoChecker.PRIZE_TIERS[i];
      Console.print(
        this.#generateWinningResultMessage(matchCount, prize, bonus, winningResults[i])
      );
    }
  }

  static printYield(yieldRate) {
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }

  static #printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  static #printLottoNumbers(lottos) {
    const output = lottos.map((lotto) => `[${lotto.getNumbers().join(', ')}]`);
    Console.print(`${output.join('\n')}\n`);
  }

  static #generateWinningResultMessage(matchCount, prize, bonus, count) {
    const bonusMessage = bonus && matchCount === 5 ? ', 보너스 볼 일치' : '';

    return `${matchCount}개 일치${bonusMessage} (${prize.toLocaleString()}원) - ${count}개`;
  }
}

export default LottoOutputWriter;
