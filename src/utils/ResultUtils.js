import { Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

// 당첨 번호가 일치한 수를 카운트
export function countPrizeResults(tickets, winningNumbers, bonusNumber) {
  const prizeResults = {
    '3': 0,
    '4': 0,
    '5': 0,
    '5+bonus': 0,
    '6': 0
  }

  const winningLotto = new Lotto(winningNumbers); // 사용자가 입력한 6개 숫자

  tickets.forEach(ticket => updatePrizeResults(ticket, winningLotto.getNumbers(), bonusNumber, prizeResults));

  return prizeResults;
}

function updatePrizeResults(ticket, winningNumbers, bonusNumber, prizeResults) {
  const matchCount = ticket.matchCount(winningNumbers);
  const hasBonus = ticket.hasBonusNumber(bonusNumber);

  if (matchCount == 6) {
    prizeResults['6']++;
  } else if (matchCount == 5 && hasBonus) {
    prizeResults['5+bonus']++;
  } else if (matchCount == 5) {
    prizeResults['5']++;
  } else if (matchCount == 4) {
    prizeResults['4']++;
  } else if (matchCount == 3) {
    prizeResults['3']++;
  }
}

// 당첨 통계 출력
export function showStatistics(prizeResults, ticketCount) {
  const prizeMoney = {
    '3': 5_000,
    '4': 50_000,
    '5': 1_500_000,
    '5+bonus': 30_000_000,
    '6': 2_000_000_000
  }

  const profitRate = calculateProfitRate(prizeResults, prizeMoney, ticketCount);
  printReesults(prizeResults, profitRate);

}

function calculateProfitRate(prizeResults, prizeMoney, ticketCount) {
  let totalMoney = 0;
  for (const [key, value] of Object.entries(prizeResults)) {
    totalMoney += value * prizeMoney[key]
  }

  const totalMoneySpent = ticketCount * 1000
  const profitRate = Math.round((totalMoney / totalMoneySpent) * 100 * 10) / 10;

  return profitRate;
}

function printReesults(prizeResults, profitRate) {
  Console.print('\n당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${prizeResults['3']}개`);
  Console.print(`4개 일치 (50,000원) - ${prizeResults['4']}개`);
  Console.print(`5개 일치 (1,500,000원) - ${prizeResults['5']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeResults['5+bonus']}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${prizeResults['6']}개`);
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
}