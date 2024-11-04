import { WINNINGS } from '../constants/constants.js';

const calculateTotalReturn = (winningCount, price) => {
  const totalPrice = Object.keys(winningCount).reduce(
    (sum, key) => sum + winningCount[key] * WINNINGS[key],
    0
  );
  const percentage = (totalPrice / price) * 100;

  return percentage.toFixed(1);
};

export default calculateTotalReturn;
