import { Console } from '@woowacourse/mission-utils';
import { lottoConfig } from '../models/lottoConfig.js';

export default class OutputLottoView {
  #OUTPUT_MESSAGE = {
    NOTIFY_PURCHASED_LOTTO_COUNT: '개를 구매했습니다.',
    LOTTO_RESULT_START: '\n당첨 통계\n---',
  };

  printMessage(message) {
    Console.print(message);
  }

  printPurchasedLottosInfo(lottoPurchaser) {
    const lottoCount = lottoPurchaser.getLottoCount();
    const lottos = lottoPurchaser.getLottos();

    Console.print(
      `\n${lottoCount}${this.#OUTPUT_MESSAGE.NOTIFY_PURCHASED_LOTTO_COUNT}`
    );
    lottos.forEach((lotto) => {
      const formattedLotto = this.#joinArrayWithFormat(lotto.getNumbers());
      Console.print(formattedLotto);
    });
  }

  printLottoResult(lottoResult) {
    const result = lottoResult.getResult()

    Console.print(this.#OUTPUT_MESSAGE.LOTTO_RESULT_START);

    Object.entries(result).forEach(([condition,count]) => {
      const transformedString = this.#transformToFormat(condition,count)
      
      Console.print(transformedString);
    });
  }

  printProfitRate(){

  }

  #transformToFormat(condition,count){
    return `${condition} (${lottoConfig.WINNING_PRIZE_MAP[condition].toLocaleString()}원) - ${count}개`
  }

  #joinArrayWithFormat(array) {
    return `[${array.join(', ')}]`;
  }
}
