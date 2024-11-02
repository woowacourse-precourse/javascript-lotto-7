import LottoManager from './LottoManager.js';
import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  LOTTO_PRIZE,
  OUTPUT_MESSAGES,
} from './constants/index.js';

class LottoGame {
  constructor() {
    this.lottoManager = new LottoManager();
  }
  async start() {
    const purchasePrice = await this.#getPurchasePrice();
    const lottos = this.lottoManager.buyLottos(purchasePrice);

    this.#printLottos(lottos);
    const winningNumber = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonusNumber(winningNumber);
    const result = this.lottoManager.getResult(
      lottos,
      winningNumber,
      bonusNumber,
    );
    this.#printResult(result, purchasePrice);
  }

  async #getPurchasePrice() {
    while (true) {
      try {
        const price = await Console.readLineAsync(
          INPUT_MESSAGES.PURCHASE_AMOUNT,
        );
        this.lottoManager.validatePrice(Number(price));
        return Number(price);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #printLottos(lottos) {
    Console.print(INPUT_MESSAGES.PURCHASE_COUNT(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });
  }

  async #getWinningNumber() {
    while (true) {
      try {
        const winningNumbersInput = await Console.readLineAsync(
          INPUT_MESSAGES.WINNING_NUMBERS,
        );
        const winningNumbers =
          this.lottoManager.getWinningLotto(winningNumbersInput);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber(winningNumber) {
    while (true) {
      try {
        const bounusNumber = await Console.readLineAsync(
          INPUT_MESSAGES.BOUNUS_NUMBER,
        );
        return this.lottoManager.validateBonus(bounusNumber, winningNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #printResult(result, purchasePrice) {
    Console.print(OUTPUT_MESSAGES.WINNER_STATIC);

    const prizeMapping = {
      3: LOTTO_PRIZE.FIFTH,
      4: LOTTO_PRIZE.FOURTH,
      5: LOTTO_PRIZE.THIRD,
      5.5: LOTTO_PRIZE.SECOND,
      6: LOTTO_PRIZE.FIRST,
    };

    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        let matchMessage = `${key}개 일치`;
        if (key === '5.5') {
          matchMessage += ', 보너스 볼 일치';
        }
        Console.print(
          `${matchMessage} (${prizeMapping[key].toLocaleString()}원) - ${result[key]}개`,
        );
      }
    }

    const prize = this.lottoManager.calculatePrize(result, purchasePrice);
    Console.print(OUTPUT_MESSAGES.TOTAL_PRIZE(prize));
  }
}

export default LottoGame;
