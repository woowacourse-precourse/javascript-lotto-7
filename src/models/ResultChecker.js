import { PRIZE_RANKS } from '../constants/prizes.js';

class ResultChecker {
  /**
   * 모든 티켓을 검사하여 각 등수별 당첨 결과를 집계합니다.
   * @param {Array} tickets - 구매한 티켓 번호 배열
   * @param {Array} winningNumbers - 당첨 번호 배열
   * @param {number} bonusNumber - 보너스 번호
   * @returns {Object} - 각 등수별 당첨 개수
   */
  checkAllTickets(tickets, winningNumbers, bonusNumber) {
    const result = Object.keys(PRIZE_RANKS).reduce((acc, rank) => {
      acc[PRIZE_RANKS[rank]] = 0;
      return acc;
    }, {});

    tickets.forEach((ticket) => {
      const rank = this.checkRank(ticket, winningNumbers, bonusNumber);
      if (rank in result) {
        result[rank]++;
      }
    });

    return result;
  }

  /**
   * 개별 티켓을 검사하여 당첨 등수를 반환합니다.
   * @param {Array} ticketNumbers - 티켓 번호 배열
   * @param {Array} winningNumbers - 당첨 번호 배열
   * @param {number} bonusNumber - 보너스 번호
   * @returns {string|null} - 당첨 등수 또는 null
   */
  checkRank(ticketNumbers, winningNumbers, bonusNumber) {
    const matchCount = this.countMatches(ticketNumbers, winningNumbers);
    const isBonusMatch = ticketNumbers.includes(bonusNumber);

    if (matchCount === 6) return PRIZE_RANKS.MATCH_6;
    if (matchCount === 5 && isBonusMatch) return PRIZE_RANKS.MATCH_5_PLUS_BONUS;
    if (matchCount === 5) return PRIZE_RANKS.MATCH_5;
    if (matchCount === 4) return PRIZE_RANKS.MATCH_4;
    if (matchCount === 3) return PRIZE_RANKS.MATCH_3;
    return null;
  }

  /**
   * 티켓 번호 중 당첨 번호가 몇 개 일치하는지의 개수를 반환합니다.
   * @param {Array} ticketNumbers - 티켓 번호 배열
   * @param {Array} winningNumbers - 당첨 번호 배열
   * @returns {number} - 일치하는 번호 개수
   */
  countMatches(ticketNumbers, winningNumbers) {
    return ticketNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }
}

export default ResultChecker;
