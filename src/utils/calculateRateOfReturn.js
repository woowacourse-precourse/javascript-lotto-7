export const calculateRateOfReturn = (purchaseAmount, winningLottoNumber) => {
  let isWinningPrize = 0;
  isWinningPrize += winningLottoNumber[0] * 5000;
  isWinningPrize += winningLottoNumber[1] * 50000;
  isWinningPrize += winningLottoNumber[2] * 1500000;
  isWinningPrize += winningLottoNumber[3] * 30000000;
  isWinningPrize += winningLottoNumber[4] * 2000000000;

  const rateOfReturn = (isWinningPrize / purchaseAmount) * 100;
  return rateOfReturn.toFixed(1);
};
