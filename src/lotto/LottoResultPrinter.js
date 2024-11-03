import { Console } from '@woowacourse/mission-utils';

class LottoResultPrinter {
  #matchedCountPerMatchOption;

  #price;

  constructor(matchedCountPerMatchOption, price) {
    this.#matchedCountPerMatchOption = matchedCountPerMatchOption;
    this.#price = price;
  }

  printResult() {
    this.#print('\n당첨 통계\n---');
    this.#printWinningResult();
    this.#printRateOfReturn();
  }

  #printWinningResult() {
    const matchResults = [];

    this.#matchedCountPerMatchOption.forEach(({ count, matchedCount, isBonus, prize }) => {
      const formatedPrice = this.#formatPrice(prize);

      if (isBonus) {
        matchResults.push(`${count}개 일치, 보너스 볼 일치 (${formatedPrice}) - ${matchedCount}개`);
        return;
      }

      matchResults.push(`${count}개 일치 (${formatedPrice}) - ${matchedCount}개`);
    });

    this.#print(matchResults.join('\n'));
  }

  #printRateOfReturn() {
    const totalPrize = this.#matchedCountPerMatchOption.reduce((acc, cur) => {
      const { matchedCount, prize } = cur;

      return acc + matchedCount * prize;
    }, 0);

    const rateOfReturnPercent = (totalPrize / this.#price) * 100;
    const rateOfReturn = rateOfReturnPercent.toFixed(1);

    this.#print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  #formatPrice(price) {
    return `${price.toLocaleString()}원`;
  }

  #print(message) {
    Console.print(message);
  }
}

export default LottoResultPrinter;
