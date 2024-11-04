export default function calProfitRate(totalPrize, totalSpent) {
  return ((totalPrize / totalSpent) * 100).toFixed(1);
}
