import { PRIZE_ERROR_MESSAGES } from '../constants/errorMessages';
import { MATCH_COUNT } from '../constants/lottoConfig.js';
import { throwError } from '../utils/validateUtils.js';

class Prize {
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
