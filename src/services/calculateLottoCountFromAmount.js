import { LOTTO_MIN_PURCHASE_AMOUNT } from "../constants/lottoConstants.js";

export const calculateLottoCountFromAmount = function (purchaseAmount) {
  const lottoCount = purchaseAmount / LOTTO_MIN_PURCHASE_AMOUNT;
  return lottoCount;
};
