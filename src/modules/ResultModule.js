class ResultModule {
  static calculateMatches(ticketNumbers, winningNumbers, bonusNumber) {
      const matchCount = ticketNumbers.filter(num => winningNumbers.includes(num)).length;
      const hasBonus = ticketNumbers.includes(bonusNumber);

      if (matchCount === 6) return '6개 일치 (2,000,000,000원)';
      if (matchCount === 5 && hasBonus) return '5개 일치, 보너스 볼 일치 (30,000,000원)';
      if (matchCount === 5) return '5개 일치 (1,500,000원)';
      if (matchCount === 4) return '4개 일치 (50,000원)';
      if (matchCount === 3) return '3개 일치 (5,000원)';
      return '0개 일치';
  }

  static tallyResults(tickets, winningNumbers, bonusNumber) {
    const results = {
        '3개 일치 (5,000원)': 0,
        '4개 일치 (50,000원)': 0,
        '5개 일치 (1,500,000원)': 0,
        '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
        '6개 일치 (2,000,000,000원)': 0,
        '0개 일치': 0,
    };

    tickets.forEach(ticket => {
        const result = this.calculateMatches(ticket.getNumbers(), winningNumbers, bonusNumber);
        results[result] += 1; // 결과 카운트 증가
    });

    return results;
}
  static printResult(results) {
    console.log(`3개 일치 (5,000원) - ${results['3개 일치 (5,000원)']}개`);
    console.log(`4개 일치 (50,000원) - ${results['4개 일치 (50,000원)']}개`);
    console.log(`5개 일치 (1,500,000원) - ${results['5개 일치 (1,500,000원)']}개`);
    console.log(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results['5개 일치, 보너스 볼 일치 (30,000,000원)']}개`);
    console.log(`6개 일치 (2,000,000,000원) - ${results['6개 일치 (2,000,000,000원)']}개`);
}