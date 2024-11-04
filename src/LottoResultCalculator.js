class LottoResultCalculator {
    constructor(tickets, winningNumbers, bonusNumber) {
      this.tickets = tickets;
      this.winningNumbers = winningNumbers;
      this.bonusNumber = bonusNumber;
    }
  
    lottoCalculateResults() {
      const results = {
        3: 0,
        4: 0,
        5: 0,
        5.5: 0,
        6: 0,
      };
  
      this.tickets.forEach((ticket) => {
        const matchCount = ticket.getMatchCount(this.winningNumbers);
        // 5개 번호와 보너스 번호가 모두 일치하는 경우 2등 처리
        if (matchCount === 5 && ticket.hasNumber(this.bonusNumber)) {
          results[5.5]++;
        } else if (results[matchCount] !== undefined) {
          results[matchCount]++;
        }
      });
  
      return results;
    }
  }
  
  export default LottoResultCalculator;