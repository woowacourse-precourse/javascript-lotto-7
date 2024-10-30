export function calculateWinningStatistics(lottoTickets, winningNumbers, bonusNumber) {
  const result = {
    first: 0, // 1등 (6개 일치)
    second: 0, // 2등 (5개 일치 + 보너스 번호)
    third: 0, // 3등 (5개 일치)
    fourth: 0, // 4등 (4개 일치)
    fifth: 0, // 5등 (3개 일치)
  };

  lottoTickets.forEach((ticket) => {
    const matchCount = ticket.filter((num) => winningNumbers.includes(num)).length;
    const hasBonus = ticket.includes(bonusNumber);

    if (matchCount === 6) {
      result.first += 1; // 1등
    } else if (matchCount === 5 && hasBonus) {
      result.second += 1; // 2등
    } else if (matchCount === 5) {
      result.third += 1; // 3등
    } else if (matchCount === 4) {
      result.fourth += 1; // 4등
    } else if (matchCount === 3) {
      result.fifth += 1; // 5등
    }
  });

  return result;
}

export function printWinningStatistics(result) {
  // 당첨 통계 출력
  console.log(`
당첨 통계
---
3개 일치 (5,000원) - ${result.fifth}개
4개 일치 (50,000원) - ${result.fourth}개
5개 일치 (1,500,000원) - ${result.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개
6개 일치 (2,000,000,000원) - ${result.first}개
`);
}
