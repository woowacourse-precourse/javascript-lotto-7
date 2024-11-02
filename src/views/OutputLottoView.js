import { Console } from '@woowacourse/mission-utils';

export default class OutputLottoView {
  #OUTPUT_MESSAGE = {
    NOTIFY_PURCHASED_LOTTO_COUNT: '개를 구매했습니다.',
    LOTTO_RESULT_START: '당첨 통계\n---\n',
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

  printLottoResult() {
    Console.print(this.#OUTPUT_MESSAGE.LOTTO_RESULT_START);
  }

  #joinArrayWithFormat(array) {
    return `[${array.join(', ')}]`;
  }
}
