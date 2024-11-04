import { Console } from '@woowacourse/mission-utils';

class Output {
  static #LOTTO_COUNT_PRINT_MESSAGE = '개를 구매했습니다.';
  static #PROFIT_RATE_PRINT_MESSAGE = '총 수익률은 %s%입니다.';
  static #WINNING_STATISTICS_PRINT_MESSAGE = '당첨통계 \n---';
  static #LOTTO_RESULTS_PRINT_MESSAGE = {
    '5th': '3개 일치 (5,000원)',
    '4th': '4개 일치 (50,000원)',
    '3rd': '5개 일치 (1,500,000원)',
    '2nd': '5개 일치, 보너스 볼 일치 (30,000,000원)',
    '1st': '6개 일치 (2,000,000,000원)',
  };

  static print(value) {
    Console.print(value);
  }

  static printLottos(lottos) {
    const lottoCount = lottos.length;
    this.print(`${lottoCount}${this.#LOTTO_COUNT_PRINT_MESSAGE}`);
    this.print(lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n'));
  }

  static printWinningStatistics(lottoResults, lottoProfitRate) {
    this.print(this.#WINNING_STATISTICS_PRINT_MESSAGE);
    this.#printLottoResult(lottoResults);
    this.#printProfitRate(lottoProfitRate);
  }

  static #printProfitRate(lottoProfitRate) {
    const printMessage = this.#PROFIT_RATE_PRINT_MESSAGE.replace(
      `%s`,
      lottoProfitRate,
    );
    this.print(printMessage);
  }

  static #printLottoResult(lottoResults) {
    const rates = Object.keys(this.#LOTTO_RESULTS_PRINT_MESSAGE);
    rates.forEach((rate) => {
      const printMessage = `${this.#LOTTO_RESULTS_PRINT_MESSAGE[rate]} - ${lottoResults[rate]}개`;
      this.print(printMessage);
    });
  }
}

export default Output;
