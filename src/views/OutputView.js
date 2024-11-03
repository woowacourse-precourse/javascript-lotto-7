import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from '../constant.js';

class OutputView {
  static printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printMyLotto(myLottos) {
    myLottos.forEach((myLotto) =>
      Console.print(`[${myLotto.toString().split(',').join(', ')}]`)
    );
  }

  #formatString(prize, matchCount, index) {
    const baseMessage = `${prize.MATCH_NUMBER}개 일치`;
    const prizeAmount = `(${prize.PRIZE.toLocaleString()}원)`;
    const countMessage = `${matchCount}개`;

    if (index === 3) {
      return `${baseMessage}, 보너스 볼 일치 ${prizeAmount} - ${countMessage}`;
    }
    return `${baseMessage} ${prizeAmount} - ${countMessage}`;
  }

  printLottoResult(lottoResult) {
    Console.print('\n당첨 통계\n---');
    LOTTO_PRIZE.forEach((prize, index) => {
      const message = this.#formatString(prize, lottoResult[index], index);
      Console.print(message);
    });
  }

  printLottoProfit(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
