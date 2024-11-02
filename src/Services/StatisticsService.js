export default class StatisticsService {
  calculateTotalRevenue(rankCounts) {
    return Object.values(rankCounts).reduce(
      (total, { ticket, prize }) => total + ticket * prize,
      0,
    );
  }

  truncateRate(revenueRate) {
    return Math.floor(revenueRate * 100) / 100;
  }

  calculateRevenueRate(totalRevenue, paidAmount) {
    const revenueRate = (totalRevenue / paidAmount) * 100;
    return this.truncateRate(revenueRate);
  }
}
