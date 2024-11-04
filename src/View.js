import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGES, NUMBER } from './shared/index.js';

class View {
  static PRICE_LIST = [5000, 50000, 1500000, 2000000000, 30000000];
  static DEFAULT_MATCH_COUNTS = [3, 4, 5, 6, 5];
  static MAX_INDEX = 4;

  static async readInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  static printResult(result) {
    Console.print(result);
  }

  static displayLottos(lottos) {
    lottos.forEach((lotto) => {
      this.printResult(this.#sortAscending(lotto));
    });
  }

  static displayResultMessages(results) {
    this.printResult(INFO_MESSAGES.PRINT_RESULT);
    const messages = this.#generateMatchMessages(results);

    messages.forEach((message) => {
      this.printResult(message);
    });
  }

  static displayProfitRate(rate) {
    return this.printResult(`총 수익률은 ${rate}% 입니다.`);
  }

  static #sortAscending = (numbers) => numbers.sort((a, b) => a - b);

  static #generateMatchMessages = (results) => {
    const messages = [];

    for (const [match, total] of results.entries()) {
      const index = this.#setIndex(match);
      const price = this.PRICE_LIST[index];
      const matchCount = this.DEFAULT_MATCH_COUNTS[index];
      const message = this.#formatMessage(matchCount, price, total, index);

      messages.push(message);
    }

    return messages.sort();
  };

  static #setIndex(match) {
    let index = 0;

    if (isNaN(match)) index = this.MAX_INDEX;
    else index = match - NUMBER.MATCH_MINIMUM_COUNT;

    return index;
  }

  static #formatMessage = (matchCount, price, totalCount, index) => {
    const defaultMessage = `(${price.toLocaleString()}원) - ${totalCount}개 `;

    if (index === this.MAX_INDEX) {
      return `${matchCount}개 일치, 보너스 볼 일치 ${defaultMessage}`;
    }
    return `${matchCount}개 일치 ${defaultMessage}`;
  };
}

export default View;
