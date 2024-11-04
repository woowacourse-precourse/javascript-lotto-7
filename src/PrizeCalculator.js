class PrizeCalculator {
  constructor(tickets, winningNumbers, bonusNumber) {
    this.tickets = tickets;
    this.winningNumbers = new Set(winningNumbers);
    this.bonusNumber = bonusNumber;
    this.prizeInfo = [
      {
        match: 6,
        message: "6개 일치 (2,000,000,000원) - ",
        prize: 2000000000,
        count: 0,
      },
      {
        match: "5+bonus",
        message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
        prize: 30000000,
        count: 0,
      },
      {
        match: 5,
        message: "5개 일치 (1,500,000원) - ",
        prize: 1500000,
        count: 0,
      },
      { match: 4, message: "4개 일치 (50,000원) - ", prize: 50000, count: 0 },
      { match: 3, message: "3개 일치 (5,000원) - ", prize: 5000, count: 0 },
    ];
  }

  calculatePrizes() {
    this.tickets.forEach((ticket) => {
      const matchCount = this.getMatchCount(ticket);
      const hasBonus = ticket.getNumbers().includes(this.bonusNumber);

      if (matchCount === 6) {
        this.prizeInfo.find((info) => info.match === 6).count++;
      } else if (matchCount === 5 && hasBonus) {
        this.prizeInfo.find((info) => info.match === "5+bonus").count++;
      } else if (matchCount >= 3) {
        this.prizeInfo.find((info) => info.match === matchCount).count++;
      }
    });

    return this.generatePrizeResults();
  }

  getMatchCount(ticket) {
    return ticket.getNumbers().filter((num) => this.winningNumbers.has(num))
      .length;
  }

  generatePrizeResults() {
    const results = [];
    let totalPrize = 0;
    let totalCost = this.tickets.length * 1000;

    this.prizeInfo.forEach(({ message, count, prize }) => {
      results.push(`${message}${count}개`);
      totalPrize += count * prize;
    });

    const profitRate = ((totalPrize / totalCost) * 100).toFixed(1);
    results.push(`총 수익률은 ${profitRate}%입니다.`);
    return results;
  }
}

export default PrizeCalculator;
