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
