class PrizeCalculator {
  constructor(tickets, winningNumbers, bonusNumber) {
    this.tickets = tickets;
    this.winningNumbers = new Set(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  calculatePrizes() {
    // 추후 구현 예정
  }
}

export default PrizeCalculator;
