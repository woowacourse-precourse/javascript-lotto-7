import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  #MESSAGE = Object.freeze({
    PURCHASED_LOTTOS_AMOUNT: (amount) => `\n${amount}개를 구매했습니다.`,
    PURCHASED_LOTTO_NUMBERS: (lottoNumbers) => `[${lottoNumbers.join(', ')}]`,
    STATISTICS_HEADER: '\n당첨 통계',
    STATISTICS_SEPARATOR: '---',
    LOTTO_RESULT_MAP: new Map(
      Object.entries({
        1: '6개 일치',
        2: '5개 일치, 보너스 볼 일치',
        3: '5개 일치',
        4: '4개 일치',
        5: '3개 일치',
      }).map(([rank, match]) => [
        Number(rank),
        (count, prize) => `${match} (${prize.toLocaleString()}원) - ${count}개`,
      ]),
    ),
    LOTTO_PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
  });

  printPurchasedLottosAmount(amount) {
    Console.print(this.#MESSAGE.PURCHASED_LOTTOS_AMOUNT(amount));
  }

  printPurchasedLottoNumbers(lottoNumbers) {
    Console.print(this.#MESSAGE.PURCHASED_LOTTO_NUMBERS(lottoNumbers));
  }

  printLottoResult(result) {
    Console.print(this.#MESSAGE.STATISTICS_HEADER);
    Console.print(this.#MESSAGE.STATISTICS_SEPARATOR);
    Array.from(result.entries())
      .reverse()
      .forEach(([rank, { count, prize }]) => {
        Console.print(this.#MESSAGE.LOTTO_RESULT_MAP.get(rank)(count, prize));
      });
  }

  printLottoProfitRate(profitRate) {
    Console.print(this.#MESSAGE.LOTTO_PROFIT_RATE(profitRate));
  }

  printError(error) {
    Console.print(error.message);
  }
}
