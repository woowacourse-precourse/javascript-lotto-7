export default function calculateUserPrize(calculateLotto, purchaseAmount) {
  const winningPrizeArray = [5000, 50000, 1500000, 2000000000, 30000000];
  let winningPrizeResult = 0;
  winningPrizeArray.forEach((prize, index) => {
    winningPrizeResult += (calculateLotto[(index + 3).toString()] || 0) * prize;
  });

  const lotteryReturns =
    ((winningPrizeResult - purchaseAmount) / purchaseAmount) * 100;

  return lotteryReturns.toFixed(1);
}
