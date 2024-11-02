import { checkMatchingNumbers, checkBonusMatch } from './winningNumbers.js';

const lottoReward = {
  3: {
    prize: 5000,
    label: '3개 일치 (5,000원)',
    key: '3',
  },
  4: {
    prize: 50000,
    label: '4개 일치 (50,000원)',
    key: '4',
  },
  5: {
    prize: 1500000,
    label: '5개 일치 (1,500,000원)',
    key: '5',
  },
  '5+': {
    prize: 30000000,
    label: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    key: '5+',
  },
  6: {
    prize: 2000000000,
    label: '6개 일치 (2,000,000,000원)',
    key: '6',
  },
};

function assignLottoRank(lottoTickets, winningNumbers, bonusNumber) {
  const rankCounts = {
    3: 0,
    4: 0,
    5: 0,
    '5+': 0,
    6: 0,
  };

  const matchNumbersArray = checkMatchingNumbers(lottoTickets, winningNumbers);
  matchNumbersArray.forEach((matchCount, index) => {
    if (matchCount === 6) {
      rankCounts[6]++;
      return;
    }

    if (matchCount === 5 && checkBonusMatch(lottoTickets[index], bonusNumber)) {
      rankCounts['5+']++;
      return;
    }

    if (lottoReward[matchCount] !== undefined) {
      rankCounts[matchCount]++;
    }
  });

  return rankCounts;
}

function displayResults(rankCounts) {
  Object.keys(lottoReward).forEach((key) => {
    const label = lottoReward[key].label;
    console.log(`${label} - ${rankCounts[key] || 0}개`);
  });
}

export { assignLottoRank, displayResults };
