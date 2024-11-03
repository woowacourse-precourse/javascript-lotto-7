import LottoManager from './LottoManager.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, LOTTO_PRIZE, OUTPUT_MESSAGES } from './constants/index.js';
class LottoGame {
  constructor() {
    this.lottoManager = new LottoManager();
  }

  async start() {
    const purchasePrice = await this.#getPurchasePrice();
    const lottos = this.#purchaseLottos(purchasePrice);
    await this.#processGameResult(lottos, purchasePrice);
  }

  async #getPurchasePrice() {
    while (true) {
      try {
        const price = await this.#readPurchasePrice();
        return price;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #readPurchasePrice() {
    const price = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    this.lottoManager.validatePrice(Number(price));
    return Number(price);
  }

  #purchaseLottos(purchasePrice) {
    const lottos = this.lottoManager.buyLottos(purchasePrice);
    this.#printLottos(lottos);
    return lottos;
  }

  #printLottos(lottos) {
    Console.print(INPUT_MESSAGES.PURCHASE_COUNT(lottos.length));
    this.#printLottoNumbers(lottos);
  }

  #printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });
  }

  async #processGameResult(lottos, purchasePrice) {
    const winningNumber = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonusNumber(winningNumber);
    const result = this.lottoManager.getResult(lottos, winningNumber, bonusNumber);
    this.#printGameResult(result, purchasePrice);
  }

  async #getWinningNumber() {
    while (true) {
      try {
        return await this.#readWinningNumber();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #readWinningNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    return this.lottoManager.getWinningLotto(input);
  }

  async #getBonusNumber(winningNumber) {
    while (true) {
      try {
        return await this.#readBonusNumber(winningNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #readBonusNumber(winningNumber) {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BOUNUS_NUMBER);
    return this.lottoManager.validateBonus(input, winningNumber);
  }

  #printGameResult(result, purchasePrice) {
    Console.print(OUTPUT_MESSAGES.WINNER_STATIC);
    this.#printPrizeResults(result);
    this.#printTotalPrize(result, purchasePrice);
  }

  #printPrizeResults(result) {
    Object.keys(result).forEach((key) => {
      const message = this.#formatPrizeMessage(key, result[key]);
      Console.print(message);
    });
  }

  #formatPrizeMessage(matchCount, count) {
    const prizeAmount = this.#getPrizeAmount(matchCount);
    const matchMessage = this.#getMatchMessage(matchCount);
    return `${matchMessage} (${prizeAmount.toLocaleString()}원) - ${count}개`;
  }

  #getPrizeAmount(matchCount) {
    const prizeMapping = {
      3: LOTTO_PRIZE.FIFTH,
      4: LOTTO_PRIZE.FOURTH,
      5: LOTTO_PRIZE.THIRD,
      5.5: LOTTO_PRIZE.SECOND,
      6: LOTTO_PRIZE.FIRST,
    };
    return prizeMapping[matchCount];
  }

  #getMatchMessage(matchCount) {
    if (matchCount === '5.5') {
      return '5개 일치, 보너스 볼 일치';
    }
    return `${matchCount}개 일치`;
  }

  #printTotalPrize(result, purchasePrice) {
    const prize = this.lottoManager.calculatePrize(result, purchasePrice);
    Console.print(OUTPUT_MESSAGES.TOTAL_PRIZE(prize));
  }
}

export default LottoGame;
