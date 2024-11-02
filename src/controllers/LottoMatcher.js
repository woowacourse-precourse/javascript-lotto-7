import { GAME_SETTINGS, RANK_KEYS, MATCH_COUNT } from '../utils/constants.js';
import Lotto from './Lotto.js';

class LottoMatcher {
  static checkMatchingNumbers(lottoTickets, winningNumbers) {
    return lottoTickets.map((lottoTicket) => {
      const ticketSet = new Set(lottoTicket.getNumbers());
      const commonNumbers = winningNumbers.filter((number) =>
        ticketSet.has(number)
      );

      return commonNumbers.length;
    });
  }

  static checkBonusMatch(lottoTicket, bonusNumber) {
    return lottoTicket.getNumbers().some((ticket) => ticket === bonusNumber);
  }

  static assignLottoRank(lottoTickets, winningNumbers, bonusNumber) {
    const rankCounts = {
      [RANK_KEYS.THREE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FOUR_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.SIX_MATCH]: GAME_SETTINGS.ZERO,
    };

    const matchNumbersArray = this.checkMatchingNumbers(
      lottoTickets,
      winningNumbers
    );

    matchNumbersArray.forEach((matchCount, index) => {
      let rewardKey = null;

      if (matchCount === MATCH_COUNT.SIX) {
        rewardKey = RANK_KEYS.SIX_MATCH;
      }
      if (matchCount === MATCH_COUNT.FIVE) {
        const bonusMatch = this.checkBonusMatch(
          lottoTickets[index],
          bonusNumber
        );
        if (bonusMatch) {
          rewardKey = RANK_KEYS.FIVE_WITH_BONUS_MATCH;
        } else {
          rewardKey = RANK_KEYS.FIVE_MATCH;
        }
      }
      if (matchCount === MATCH_COUNT.FOUR) {
        rewardKey = RANK_KEYS.FOUR_MATCH;
      }
      if (matchCount === MATCH_COUNT.THREE) {
        rewardKey = RANK_KEYS.THREE_MATCH;
      }

      if (rewardKey) {
        rankCounts[rewardKey]++;
      }
    });

    return rankCounts;
  }
}

export default LottoMatcher;
