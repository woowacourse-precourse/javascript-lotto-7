import Lotto from '../Lotto.js';
import generateLottoNumbers from '../utils/generateRandomNumbers.js';
import { RANK, PRIZE_KEY, INITIAL_STATISTICS } from '../constants/constants.js';

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
    return this.#lottos.map((lotto) => {
      const winningNumbers = winningLotto.getLottoNumbers();
      lotto.getCompareResults(winningNumbers, bonusNumber);
    });
  }

  calculateStatics(compareResults) {
    const statistics = { ...INITIAL_STATISTICS };

    compareResults.forEach(({ matchedNumbers, hasBonusNumber }) => {
      this.#updateStatistics(statistics, matchedNumbers, hasBonusNumber);
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
    if (matchingCount === RANK.fifth) statistics[PRIZE_KEY.first_prize] += 1;
  }
}

export default LottoGame;
