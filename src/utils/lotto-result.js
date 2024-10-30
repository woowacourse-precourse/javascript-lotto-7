import { MissionUtils } from "@woowacourse/mission-utils";

const PRIZE_MONEY = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

export function calculateWinningStatistics(lottoTickets, winningNumbers, bonusNumber) {
  const result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  lottoTickets.forEach((ticket) => {
    const matchCount = ticket.filter((num) => winningNumbers.includes(num)).length;
    const hasBonus = ticket.includes(bonusNumber);

    if (matchCount === 6) {
      result.first += 1;
    } else if (matchCount === 5 && hasBonus) {
      result.second += 1;
    } else if (matchCount === 5) {
      result.third += 1;
    } else if (matchCount === 4) {
      result.fourth += 1;
    } else if (matchCount === 3) {
      result.fifth += 1;
    }
  });

  return result;
}

export function printWinningStatistics(result) {
  MissionUtils.Console.print(`
    당첨 통계
    ---
    3개 일치 (5,000원) - ${result.fifth}개
    4개 일치 (50,000원) - ${result.fourth}개
    5개 일치 (1,500,000원) - ${result.third}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개
    6개 일치 (2,000,000,000원) - ${result.first}개`);
}

export function calculateTotalEarnings(result) {
  return (
    result.first * PRIZE_MONEY.first +
    result.second * PRIZE_MONEY.second +
    result.third * PRIZE_MONEY.third +
    result.fourth * PRIZE_MONEY.fourth +
    result.fifth * PRIZE_MONEY.fifth
  );
}

export function calculateProfitRate(totalEarnings, purchaseAmount) {
  const profitRate = ((totalEarnings / purchaseAmount) * 100).toFixed(1);
  return profitRate;
}
