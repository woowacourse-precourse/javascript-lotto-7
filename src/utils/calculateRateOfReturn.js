const calculateRateOfReturn = (investment, profit) => {
  const rateOfReturn = (profit / investment) * 100;

  return Math.round(rateOfReturn * 100) / 100;
};

export default calculateRateOfReturn;
