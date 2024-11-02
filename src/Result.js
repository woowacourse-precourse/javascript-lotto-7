import { Console } from '@woowacourse/mission-utils';
const prize = [2000000000, 30000000, 1500000, 50000, 5000];

const getEarningRate = (resultCount, purchase) => {
  const total = getTotalPrize(resultCount);
  const earningRate = ((100 * total) / purchase).toFixed(1);

  return earningRate;
};

const getTotalPrize = (resultCount) => {
  let totalPrize = 0;
  for (let i = 0; i < 5; i++) {
    totalPrize += prize[i] * resultCount[i];
  }

  return totalPrize;
};

export { getEarningRate };
