import { checkMatchingNumbers, checkBonusMatch } from './winningNumbers.js';

export const lottoReward = {
  threeMatch: {
    prize: 5000,
    label: '3개 일치 (5,000원)',
    key: 3,
  },
  fourMatch: {
    prize: 50000,
    label: '4개 일치 (50,000원)',
    key: 4,
  },
  fiveMatch: {
    prize: 1500000,
    label: '5개 일치 (1,500,000원)',
    key: 5,
  },
  fiveWithBonusMatch: {
    prize: 30000000,
    label: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    key: 5,
    isBonus: true,
  },
  sixMatch: {
    prize: 2000000000,
    label: '6개 일치 (2,000,000,000원)',
    key: 6,
  },
};

// NaN

function assignLottoRank(lottoTickets, winningNumbers, bonusNumber) {
  const rankCounts = {
    threeMatch: 0,
    fourMatch: 0,
    fiveMatch: 0,
    fiveWithBonusMatch: 0,
    sixMatch: 0,
  };
  const matchNumbersArray = checkMatchingNumbers(lottoTickets, winningNumbers);

  matchNumbersArray.forEach((matchCount, index) => {
    let rewardKey = null;

    if (matchCount === 6) {
      rewardKey = 'sixMatch';
    }
    if (matchCount === 5) {
      const bonusMatch = checkBonusMatch(lottoTickets[index], bonusNumber);
      if (bonusMatch) {
        rewardKey = 'fiveWithBonusMatch';
      } else {
        rewardKey = 'fiveMatch';
      }
    }
    if (matchCount === 4) {
      rewardKey = 'fourMatch';
    }
    if (matchCount === 3) {
      rewardKey = 'threeMatch';
    }

    if (rewardKey) {
      rankCounts[rewardKey]++;
    }
  });

  return rankCounts;
}

function displayResults(rankCounts) {
  for (const [key, value] of Object.entries(lottoReward)) {
    console.log(`${value.label} - ${rankCounts[key] || 0}개`);
  }
}

export { assignLottoRank, displayResults };
