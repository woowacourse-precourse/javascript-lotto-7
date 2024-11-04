import { Console } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

export default class OutputLottoView {
  #OUTPUT_MESSAGE = {
    NOTIFY_PURCHASED_LOTTO_COUNT: '개를 구매했습니다.',
    LOTTO_RESULT_START: '\n당첨 통계\n---',
    EARNING_RATE_START: '총 수익률은 ',
    EARNING_RATE_END: '%입니다.',
  };

  printMessage(message) {
    Console.print(message);
  }

  printPurchasedLottosInfo(lottoPurchaser) {
    const lottoCount = lottoPurchaser.getLottoCount();
    const lottos = lottoPurchaser.getLottos();

    Console.print(
      `\n${lottoCount}${this.#OUTPUT_MESSAGE.NOTIFY_PURCHASED_LOTTO_COUNT}`,
    );
    lottos.forEach((lotto) => {
      const formattedLotto = this.#joinArrayWithFormat(lotto.getNumbers());
      Console.print(formattedLotto);
    });
  }

  printLottoResult(lottoResultDTO) {
    const result = lottoResultDTO.getResult();

    Console.print(this.#OUTPUT_MESSAGE.LOTTO_RESULT_START);

    Object.entries(result)
      .forEach(([condition, count]) => {
        const transformedString = this.#transformToFormat(condition, count);

        Console.print(transformedString);
      });
  }

  printEarningRate(lottoResultDTO) {
    const earningRate = lottoResultDTO.getEarningRate();

    Console.print(
      `${this.#OUTPUT_MESSAGE.EARNING_RATE_START}${earningRate}${
        this.#OUTPUT_MESSAGE.EARNING_RATE_END
      }`,
    );
  }

  #transformToFormat(condition, count) {
    return `${condition} (${LOTTO_CONFIG.WINNING_PRIZE_MAP[
      condition
      ].toLocaleString()}원) - ${count}개`;
  }

  #joinArrayWithFormat(array) {
    return `[${array.join(', ')}]`;
  }
}
