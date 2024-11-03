import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_PRICE,
  ERROR_MESSAGES,
  MESSAGES,
  LOTTO_NUMBERS,
} from "./constants.js";
import Lotto from "./Lotto.js";

class LottoApp {
  async promptPurchaseAmount() {
    try {
      const amount = await MissionUtils.Console.readLineAsync(
        MESSAGES.PURCHASE_AMOUNT_PROMPT
      );
      this.validateAmount(amount);
      return Number(amount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO_PRICE);
    const lottos = this.generateLottos(count);
    this.printLottoTickets(lottos);
  }

  validateAmount(amount) {
    const parsedAmount = Number(amount);
    if (
      isNaN(parsedAmount) ||
      parsedAmount <= 0 ||
      parsedAmount % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS.MIN,
      LOTTO_NUMBERS.MAX,
      LOTTO_NUMBERS.COUNT
    ).sort((a, b) => a - b);
  }

  generateLottos(count) {
    MissionUtils.Console.print(`\n${count}${MESSAGES.LOTTO_PURCHASED}`);
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto(this.generateLottoNumbers()));
    }
    return lottos;
  }

  printLottoTickets(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  async promptWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        MESSAGES.WINNING_NUMBER_PROMPT
      );
      const numbers = this.parseWinningNumbers(input);
      const winningLotto = new Lotto(numbers);
      return winningLotto;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptWinningNumbers();
    }
  }

  parseWinningNumbers(input) {
    return input.split(",").map((num) => Number(num.trim()));
  }
}

export default LottoApp;
