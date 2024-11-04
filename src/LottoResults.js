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

function calculateProfit(results) {
    let totalProfit = 0;
    for (const [key, count] of Object.entries(results)) {
      totalProfit += count * PRIZES[key];
    }
    return totalProfit;
  }  

  export function printResults(results, amount) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (${PRIZES[3].toLocaleString()}원) - ${results[3]}개`);
    Console.print(`4개 일치 (${PRIZES[4].toLocaleString()}원) - ${results[4]}개`);
    Console.print(`5개 일치 (${PRIZES[5].toLocaleString()}원) - ${results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${PRIZES['5+bonus'].toLocaleString()}원) - ${results['5+bonus']}개`);
    Console.print(`6개 일치 (${PRIZES[6].toLocaleString()}원) - ${results[6]}개`);
  
    const totalProfit = calculateProfit(results);
    const profitRate = ((totalProfit / amount) * 100).toFixed(1);
  
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }  