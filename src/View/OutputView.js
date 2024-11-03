import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static #MESSAGE = Object.freeze({
    PURCHASED_LOTTOS_AMOUNT: (amount) => `\n${amount}개를 구매했습니다.`,
    PURCHASED_LOTTO_NUMBERS: (lottoNumbers) => `[${lottoNumbers.join(', ')}]`,
  });

  static printPurchasedLottosAmount(amount) {
    Console.print(OutputView.#MESSAGE.PURCHASED_LOTTOS_AMOUNT(amount));
  }

  static printPurchasedLottoNumbers(lottoNumbers) {
    const sortedLottoNumbers = lottoNumbers.sort((a, b) => a - b);

    Console.print(
      OutputView.#MESSAGE.PURCHASED_LOTTO_NUMBERS(sortedLottoNumbers),
    );
  }
}
