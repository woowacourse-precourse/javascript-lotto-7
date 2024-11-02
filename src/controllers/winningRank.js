import { checkMatchingNumbers, checkBonusMatch } from './winningNumbers.js';

// 3개 일치 (5,000원) - 1개
// 4개 일치 (50,000원) - 0개
// 5개 일치 (1,500,000원) - 0개
// 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
// 6개 일치 (2,000,000,000원) - 0개

// checkMatchingNumbers [3,4,0,1,2] 당첨개수
// checkBonusMatch true|false 일치여부
// map으로 rank 나눠주고 분기처리하는 함수
// 출력형식 display 하는 함수

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

export default function assignLottoRank(
  lottoTickets,
  winningNumbers,
  bonusNumber
) {
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
