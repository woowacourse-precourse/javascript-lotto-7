class ReturnRateCalculator {
  calculateReturnRate(logs, amount) {
    const sum = logs.reduce((acc, cur) => {
      if (cur.count > 0) {
        acc += cur.prizeMoney;
      }
      return acc;
    }, 0);

    const returnRate = (sum / amount) * 100;

    return Math.round(returnRate * 100) / 100;
  }
}

export default ReturnRateCalculator;
