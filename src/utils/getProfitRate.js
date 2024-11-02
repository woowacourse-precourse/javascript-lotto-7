const getProfitRate = (profit, money) => {
  const profitRate = (profit / money) * 100;
  const rates = profitRate.toFixed(1).toString().split('.');
  rates[0] = rates[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return rates.join('.');
};

export default getProfitRate;
