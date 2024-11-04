const PERCENTAGE_FACTOR = 100;
const DECIMAL_POINT = 1;

class RevenueCalculator {
  constructor() {
    this.revenue = "";
  }

  calculateRevenue(reward, price) {
    const value = this.computeRevenue(reward, price);
    this.revenue = value.toFixed(DECIMAL_POINT);
  }

  computeRevenue(reward, price) {
    return (reward / price) * PERCENTAGE_FACTOR;
  }
}

export default RevenueCalculator;
