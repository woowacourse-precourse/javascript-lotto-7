import { Console } from '@woowacourse/mission-utils';
import { prizeRanks } from '../constant/prizeRanks';

export function outputPayment(amount) {
  if (amount % 1000 !== 0) return;

  Console.print(`${amount / 1000}개를 구매했습니다.`);
}

export function printLottos(lottos) {
  lottos.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });

  Console.print('');
}

export function printResult(lottos, winningNumbers, bonusNumber) {
  const result = lottos.reduce((acc, lotto) => {
    const matchCount = getMatchCount(lotto, winningNumbers);
    const isHasBonusNumber = hasBonusNumber(lotto, bonusNumber);
    const rank = getRank(matchCount, isHasBonusNumber);

    acc[rank] += 1;
    return acc;
  }, prizeRanks);

  printPrizeRank(result, lottos);
}

function getMatchCount(lotto, winningNumbers) {
  return lotto.numbers.filter((number) => winningNumbers.numbers.includes(number)).length;
}

function hasBonusNumber(lotto, bonusNumber) {
  return lotto.numbers.includes(bonusNumber);
}

function getRank(matchCount, isHasBonusNumber) {
  if (matchCount === 6) {
    return 'FIRST';
  }
  if (matchCount === 5 && isHasBonusNumber) {
    return 'SECOND';
  }
  if (matchCount === 5) {
    return 'THIRD';
  }
  if (matchCount === 4) {
    return 'FOURTH';
  }
  if (matchCount === 3) {
    return 'FIFTH';
  }
  return 'MISS';
}

function getTotalProfitRate(lottos, result) {
  const totalWinningMoney =
    result.FIRST * 2000000000 +
    result.SECOND * 30000000 +
    result.THIRD * 1500000 +
    result.FOURTH * 50000 +
    result.FIFTH * 5000;
  const totalAmount = lottos.length * 1000;
  return ((totalWinningMoney / totalAmount) * 100).toFixed(1);
}

function printPrizeRank(result, lottos) {
  Console.print(`3개 일치 (5,000원) - ${result.FIFTH}개`);
  Console.print(`4개 일치 (50,000원) - ${result.FOURTH}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result.THIRD}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.SECOND}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result.FIRST}개`);
  Console.print(`총 수익률은 ${getTotalProfitRate(lottos, result)}%입니다.`);
}
