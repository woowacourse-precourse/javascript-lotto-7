import { LOTTO_PRICE } from "../constants/lotto";
import { ERROR_MESSAGE as ERROR } from "../constants/errorMessage";

const calculateTicketCount = (purchaseAmount) => {
  if (purchaseAmount % LOTTO_PRICE !== 0) {
    throw Error(ERROR.INVALID_PURCHASE_AMOUNT);
  }

  return purchaseAmount / LOTTO_PRICE;
};

export default calculateTicketCount;
