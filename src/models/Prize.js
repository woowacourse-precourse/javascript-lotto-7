import { PRIZE_ERROR_MESSAGES } from '../constants/errorMessages';
import { MATCH_COUNT } from '../constants/lottoConfig.js';
import ConsoleIO from '../io/ConsoleIO.js';
import { throwError } from '../utils/validateUtils.js';

class Prize {
  #prizeMoney = 0;

  sumPrizeCount(tickets) {
    const prizeCount = {
      placeOf5: 0,
      placeOf4: 0,
      placeOf3: 0,
      placeOf2: 0,
      placeOf1: 0,
    };

    tickets.forEach((lotto) => {
      const ranking = lotto.getRanking();
      if (ranking <= 6 && ranking >= 1) {
        prizeCount[`placeOf${ranking}`] += 1;
      }
    });

    return prizeCount;
  }

  sumPrizeMoney(tickets) {
    tickets.forEach((lotto) => {
      const ranking = lotto.getRanking();
      this.#prizeMoney += this.#checkPrizeMoney(ranking);
    });
  }

  #checkPrizeMoney(ranking) {
    switch (ranking) {
      case 5:
        return 5_000;
      case 4:
        return 50_000;
      case 3:
        return 1_500_000;
      case 2:
        return 30_000_000;
      case 1:
        return 2_000_000_000;
    }
  }

  getPrizeMoney() {
    return this.#prizeMoney;
  }

  static rank({ matchCount, isBonusMatch }) {
    this.#validateMatchCount(matchCount);

    switch (matchCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (isBonusMatch) return 2;
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  static #validateMatchCount(matchCount) {
    if (matchCount > MATCH_COUNT.max) {
      throwError(PRIZE_ERROR_MESSAGES.exceedMaxMatchCount);
    }

    if (matchCount < MATCH_COUNT.min) {
      throwError(PRIZE_ERROR_MESSAGES.nagativeMatchCount);
    }
  }
}

export default Prize;
