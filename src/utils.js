export const validatePurchaseAmount = (input) => {
  const amount = parseInt(input, 10);
  if (isNaN(amount) || amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
  }
};

export const formatNumbers = (numbers) => numbers.join(", ");

export const calculateYield = (results, purchaseAmount, prizeMoney) => {
  const totalPrize = Object.entries(results).reduce(
    (sum, [rank, count]) => sum + count * prizeMoney[rank],
    0
  );

  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
};
