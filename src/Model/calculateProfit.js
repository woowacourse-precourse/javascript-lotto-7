export default function calculateProfit(object, amount) {
  const PROFIT = object.reduce((acc, cur, index) => {
    cur = object[index].prize * object[index].count;
    return acc + cur;
  }, 0);

  const PROFIT_RATE = ((PROFIT / amount) * 100).toFixed(1);

  return PROFIT_RATE;
}