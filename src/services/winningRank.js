import { checkMatchingNumbers, checkBonusMatch } from './winningNumbers.js';
import { Console } from '@woowacourse/mission-utils';
import {
  GAME_SETTINGS,
  LOTTO_REWARD,
  RANK_KEYS,
  MATCH_COUNT,
} from '../utils/constants.js';

function assignLottoRank(lottoTickets, winningNumbers, bonusNumber) {
  const rankCounts = {
    [RANK_KEYS.THREE_MATCH]: GAME_SETTINGS.ZERO,
    [RANK_KEYS.FOUR_MATCH]: GAME_SETTINGS.ZERO,
    [RANK_KEYS.FIVE_MATCH]: GAME_SETTINGS.ZERO,
    [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: GAME_SETTINGS.ZERO,
    [RANK_KEYS.SIX_MATCH]: GAME_SETTINGS.ZERO,
  };
  const matchNumbersArray = checkMatchingNumbers(lottoTickets, winningNumbers);

  matchNumbersArray.forEach((matchCount, index) => {
    let rewardKey = null;

    if (matchCount === MATCH_COUNT.SIX) {
      rewardKey = RANK_KEYS.SIX_MATCH;
    }
    if (matchCount === MATCH_COUNT.FIVE) {
      const bonusMatch = checkBonusMatch(lottoTickets[index], bonusNumber);
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

function displayResults(rankCounts) {
  for (const [key, value] of Object.entries(LOTTO_REWARD)) {
    Console.print(
      `${value.label} - ${rankCounts[key] || GAME_SETTINGS.ZERO}개`
    );
  }
}

export { assignLottoRank, displayResults };
