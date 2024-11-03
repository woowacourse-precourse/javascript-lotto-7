import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_EACH_AMOUNT,
  WINNING_FIFTH_PRIZE,
  WINNING_FIRST_PRIZE,
  WINNING_FOURTH_PRIZE,
  WINNING_SECOND_PRIZE,
  WINNING_THIRD_PRIZE,
} from "../constants.js";
import Lotto from "../Lotto.js";

class LottoController {
  #Lottos;
  #lottoTotalNumber;
  #winningCountArr = [0, 0, 0, 0, 0];
  #winningPrizeArr = [
    WINNING_FIFTH_PRIZE,
    WINNING_FOURTH_PRIZE,
    WINNING_THIRD_PRIZE,
    WINNING_SECOND_PRIZE,
    WINNING_FIRST_PRIZE,
  ];

  constructor(lottoAmount) {
    this.#lottoTotalNumber = lottoAmount / LOTTO_EACH_AMOUNT;
    this.#Lottos = [];

    for (let i = 0; i < this.#lottoTotalNumber; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.#Lottos.push(new Lotto(randomNumber));
    }
  }

  getLottoTotalNumber() {
    return this.#lottoTotalNumber;
  }

  getAllLottos() {
    return this.#Lottos;
  }

  calculateWinningLottos(winningLotto, bonusNumber) {
    this.#Lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const lottoMatchCount = lottoNumbers.filter((number) =>
        winningLotto.getNumbers().includes(number)
      ).length;
      const bonusMatch = lottoNumbers.includes(bonusNumber);

      this.updateWinningCount(lottoMatchCount, bonusMatch);
    });
  }

  updateWinningCount(matchedCount, bonusMatch) {
    // 일치하는 개수와 보너스 번호 여부에 따라 당첨 결과 처리
    if (matchedCount === 6) {
      this.#winningCountArr[4] += 1; // 1등 (6개 일치)
    } else if (matchedCount === 5 && bonusMatch) {
      this.#winningCountArr[3] += 1; // 2등 (5개 + 보너스 번호 일치)
    } else if (matchedCount === 5) {
      this.#winningCountArr[2] += 1; // 3등 (5개 일치)
    } else if (matchedCount === 4) {
      this.#winningCountArr[1] += 1; // 4등 (4개 일치)
    } else if (matchedCount === 3) {
      this.#winningCountArr[0] += 1; // 5등 (3개 일치)
    }
  }

  getWinningPrizeStatistics() {
    return this.#winningCountArr;
  }

  getTotalProfit() {
    let totalProfit = 0;
    this.#winningCountArr.forEach((count, index) => {
      totalProfit += count * this.#winningPrizeArr[index];
    });
    return totalProfit;
  }

  getProfitRate() {
    const totalProfit = this.getTotalProfit();
    const lottoAmount = this.#lottoTotalNumber * LOTTO_EACH_AMOUNT;
    return ((totalProfit / lottoAmount) * 100).toFixed(1);
  }
}

export default LottoController;
