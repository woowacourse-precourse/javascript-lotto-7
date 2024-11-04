import RANKS from "../Model/Rank.js";

function calculateWinningResult(lottoTickets, winningNumbers, bonusNumber) {
  const result = {
    [RANKS.SIX_MATCH.key]: 0,
    [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
    [RANKS.FIVE_MATCH.key]: 0,
    [RANKS.FOUR_MATCH.key]: 0,
    [RANKS.THREE_MATCH.key]: 0,
  };

  lottoTickets.forEach((ticket) => {
    const matchCount = countMatches(ticket.getNumbers(), winningNumbers);
    const isBonusMatched = ticket.getNumbers().includes(bonusNumber);
    const rankKey = determineRank(matchCount, isBonusMatched);

    if (rankKey) result[rankKey] += 1;
  });

  return result;
}

// 티켓과 당첨 번호의 일치 개수 계산
function countMatches(ticket, winningNumbers) {
  return ticket.filter((number) => winningNumbers.includes(number)).length;
}

// 매치 개수와 보너스 일치 여부에 따라 순위를 결정
function determineRank(matchCount, isBonusMatched) {
  if (matchCount === 6) return RANKS.SIX_MATCH.key;
  if (matchCount === 5 && isBonusMatched)
    return RANKS.FIVE_MATCH_WITH_BONUS.key;
  if (matchCount === 5) return RANKS.FIVE_MATCH.key;
  if (matchCount === 4) return RANKS.FOUR_MATCH.key;
  if (matchCount === 3) return RANKS.THREE_MATCH.key;
  return null; // 당첨 등수 없음
}

export { calculateWinningResult };
