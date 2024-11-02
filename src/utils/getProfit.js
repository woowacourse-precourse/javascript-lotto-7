const RANK = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  0: 0,
};

const getProfit = (result) => {
  let profit = 0;
  Object.entries(result).forEach(([rank, count]) => {
    profit += RANK[Number(rank)] * Number(count);
  });
  return profit;
};

export default getProfit;
