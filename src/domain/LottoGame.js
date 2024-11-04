import Lotto from '../Lotto.js';
import generateLottoNumbers from '../utils/generateRandomNumbers.js';
import {
  RANK,
  PRIZE_KEY,
  INITIAL_STATISTICS,
  PRIZE_AMOUNT,
  PRICE_PER_LOTTO,
} from '../constants/constants.js';

class LottoGame {
  #lottos;

  setLottos(tickets) {
    this.#lottos = this.#generateLotto(tickets);
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getLottoNumbers());
  }

  #generateLotto(amount) {
    return Array.from(
      { length: amount },
      () => new Lotto(generateLottoNumbers()),
    );
  }

  calculateCompareResults(winningLotto, bonusNumber) {
    const winningNumbers = winningLotto.getLottoNumbers();

    return this.#lottos.map((lotto) => {
      return lotto.getCompareResults(winningNumbers, bonusNumber);
    });
  }

  calculateStatics(compareResults) {
    const statistics = { ...INITIAL_STATISTICS };
    compareResults.forEach(({ matchingCount, hasBonusNumber }) => {
      this.#updateStatistics(statistics, matchingCount, hasBonusNumber);
    });

    return statistics;
  }

  #updateStatistics(statistics, matchingCount, hasBonusNumber) {
    if (matchingCount === RANK.first) statistics[PRIZE_KEY.first_prize] += 1;

    if (matchingCount === RANK.second && hasBonusNumber)
      statistics[PRIZE_KEY.second_prize] += 1;

    if (matchingCount === RANK.third && !hasBonusNumber)
      statistics[PRIZE_KEY.third_prize] += 1;

    if (matchingCount === RANK.fourth) statistics[PRIZE_KEY.fourth_prize] += 1;

    if (matchingCount === RANK.fifth) statistics[PRIZE_KEY.fifth_prize] += 1;
  }

  getTotalPrizeAmount(statistics) {
    return Object.entries(statistics).reduce((acc, [prizeKey, count]) => {
      return acc + PRIZE_AMOUNT[prizeKey] * count;
    }, 0);
  }

  getProfitRatio(totalPrizeAmount) {
    const totalTicketCost = this.#lottos.length * PRICE_PER_LOTTO;
    return ((totalPrizeAmount / totalTicketCost) * 100).toFixed(1);
  }
}

export default LottoGame;
