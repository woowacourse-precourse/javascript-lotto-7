export class YieldCalculator {
  static getYieldRate = (purchaseAmount, record) => {
    let profit = 0;
    record.forEach((table) => {
      profit += table.count * table.priceNumber;
    });
    const yieldRate = (profit / purchaseAmount) * 100;
    return yieldRate.toFixed(1);
  };
}
