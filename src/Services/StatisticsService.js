export default class StatisticsService {
  calculateTotalRevenue(rankCounts) {
    return Object.values(rankCounts).reduce(
      (total, { ticket, prize }) => total + ticket * prize,
      0,
    );
  }

  calculateRevenueRate(totalRevenue, paidAmount) {
    return (totalRevenue / paidAmount) * 100;
  }
}
