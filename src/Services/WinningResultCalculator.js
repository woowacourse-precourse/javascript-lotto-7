import RANKS from "../Model/Rank.js";

class WinningResultCalculator {
  // 초기 결과 객체 생성
  initResultObject() {
    return {
      [RANKS.SIX_MATCH.key]: 0,
      [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
      [RANKS.FIVE_MATCH.key]: 0,
      [RANKS.FOUR_MATCH.key]: 0,
      [RANKS.THREE_MATCH.key]: 0,
    };
  }

  calculate(lottoTickets, winningNumbers, bonusNumber) {
    const result = this.initResultObject();
    lottoTickets.forEach((ticket) =>
      this.updateResult(ticket, winningNumbers, bonusNumber, result)
    );
    return result;
  }

  // 결과 업데이트
  updateResult(ticket, winningNumbers, bonusNumber, result) {
    const matchCount = this.countMatches(ticket.getNumbers(), winningNumbers);
    const isBonusMatched = ticket.getNumbers().includes(bonusNumber);
    const rankKey = this.determineRank(matchCount, isBonusMatched);
    if (rankKey) result[rankKey] += 1;
  }

  // 티켓과 당첨 번호의 일치 개수 계산
  countMatches(ticketNumbers, winningNumbers) {
    return ticketNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  // 매치 개수와 보너스 일치 여부에 따라 순위를 결정
  determineRank(matchCount, isBonusMatched) {
    if (matchCount === 6) return RANKS.SIX_MATCH.key;
    if (matchCount === 5 && isBonusMatched)
      return RANKS.FIVE_MATCH_WITH_BONUS.key;
    if (matchCount === 5) return RANKS.FIVE_MATCH.key;
    if (matchCount === 4) return RANKS.FOUR_MATCH.key;
    if (matchCount === 3) return RANKS.THREE_MATCH.key;
    return null;
  }
}

export default WinningResultCalculator;
