export const calculateLottoCount = (purchasePrice) => {
  const lottoCount = Math.floor(purchasePrice / 1000);

  return lottoCount;
};
