export const countPurchaseAmount = (purchasePrice) => {
  const LOTTO_PRICE_UNIT = 1000;
  const purchaseCount = purchasePrice / LOTTO_PRICE_UNIT;
  
  return purchaseCount;
};
