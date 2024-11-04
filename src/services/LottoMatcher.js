import { GAME_SETTINGS, RANK_KEYS } from '../utils/constants.js';
import Lotto from '../domain/Lotto.js';

class LottoMatcher {
  #tickets;
  #winningNumbers;
  #bonusNumber;

  #REWARDS = [
    RANK_KEYS.NONE,
    RANK_KEYS.NONE,
    RANK_KEYS.NONE,
    RANK_KEYS.THREE_MATCH,
    RANK_KEYS.FOUR_MATCH,
    RANK_KEYS.FIVE_MATCH,
    RANK_KEYS.SIX_MATCH,
  ];

  constructor(lottoTickets, winningNumbers, bonusNumber) {
    this.#tickets = lottoTickets;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #checkMatchingNumbers() {
    return this.#tickets.map((lottoTicket) =>
      lottoTicket.getMatchedCount(this.#winningNumbers)
    );
  }

  #checkBonusMatch(lottoTicket) {
    return lottoTicket.isBonusMatched(this.#bonusNumber);
  }

  run() {
    const rankCounts = {
      [RANK_KEYS.NONE]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.THREE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FOUR_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.SIX_MATCH]: GAME_SETTINGS.ZERO,
    };

    const matchNumbersArray = this.#checkMatchingNumbers();

    matchNumbersArray.forEach((matchCount, index) => {
      const rewardKey = this.#REWARDS[matchCount];

      const bonusMatch = this.#checkBonusMatch(this.#tickets[index]);

      if (rewardKey === RANK_KEYS.FIVE_MATCH && bonusMatch) {
        rankCounts[RANK_KEYS.FIVE_WITH_BONUS_MATCH]++;
      } else {
        rankCounts[rewardKey]++;
      }
    });

    return rankCounts;
  }
}

export default LottoMatcher;
