import { Console } from '@woowacourse/mission-utils';

const PRIZES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5+bonus': 30000000,
  6: 2000000000,
};

export function calculateResults(lottos, winningNumbers, bonusNumber) {
  const results = {
    3: 0,
    4: 0,
    5: 0,
    '5+bonus': 0,
    6: 0,
  };

  lottos.forEach((lotto) => {
    const matchedCount = countMatches(lotto.getNumbers(), winningNumbers);
    if (matchedCount === 6) {
      results[6]++;
    } else if (matchedCount === 5 && lotto.getNumbers().includes(bonusNumber)) {
      results['5+bonus']++;
    } else if (matchedCount === 5) {
      results[5]++;
    } else if (matchedCount === 4) {
      results[4]++;
    } else if (matchedCount === 3) {
      results[3]++;
    }
  });

  return results;
}

function countMatches(lottoNumbers, winningNumbers) {
  return lottoNumbers.filter(num => winningNumbers.includes(num)).length;
}