import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants";
import Lotto from "./Lotto";

export default class LottoGame {
  #purchasedLottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#purchasedLottos = [];
  }

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO.PRICE);
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBERS_PER_TICKET
      );
      this.#purchasedLottos.push(new Lotto(numbers));
    }
    return count;
  }

  getPurchasedLottos() {
    return this.#purchasedLottos.map((lotto) => lotto.getNumbers());
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.#winningNumbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateResults() {
    const results = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    this.#purchasedLottos.forEach((lotto) => {
      const matchCount = lotto.countMatchingNumbers(this.#winningNumbers);
      if (matchCount === LOTTO.WINNING_NUMBERS.FIRST) {
        results.FIRST += 1;
      } else if (
        matchCount === LOTTO.WINNING_NUMBERS.SECOND &&
        lotto.hasNumber(this.#bonusNumber)
      ) {
        results.SECOND += 1;
      } else if (matchCount === LOTTO.WINNING_NUMBERS.THIRD) {
        results.THIRD += 1;
      } else if (matchCount === LOTTO.WINNING_NUMBERS.FOURTH) {
        results.FOURTH += 1;
      } else if (matchCount === LOTTO.WINNING_NUMBERS.FIFTH) {
        results.FIFTH += 1;
      }
    });

    return results;
  }
}
