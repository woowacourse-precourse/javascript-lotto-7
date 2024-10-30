import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RESULT_TEMPLATE } from '../constants/constants.js';

class OutputView {
  displayEmptyLine() {
    Console.print('');
  }

  displayLottoCount(lottoCount) {
    this.displayEmptyLine();
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  displayLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });

    this.displayEmptyLine();
  }

  displayLottoResult(lottoResult) {
    this.displayEmptyLine();
    Console.print('당첨 통계\n---');

    Object.keys(LOTTO_RESULT_TEMPLATE).forEach((rank) => {
      Console.print(
        LOTTO_RESULT_TEMPLATE[rank].replace('{count}', lottoResult[rank].count)
      );
    });
  }

  displayLottoRateOfReturn(lottoRateOfReturn) {
    Console.print(`총 수익률은 ${lottoRateOfReturn}%입니다.`);
  }

  displayErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
