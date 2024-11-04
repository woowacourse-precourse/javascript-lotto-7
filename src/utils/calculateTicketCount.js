import { LOTTO_PRICE } from "../constants/lotto.js";
import { ERROR_MESSAGE as ERROR } from "../constants/errorMessage.js";

const calculateTicketCount = (purchaseAmount) => {
  checkError(purchaseAmount);

  return purchaseAmount / LOTTO_PRICE;
};

const checkError = (purchaseAmount) => {
  if (isNaN(Number(purchaseAmount))) {
    throw Error(ERROR.NOT_NUMBER);
  }

  if (purchaseAmount % LOTTO_PRICE !== 0) {
    throw Error(ERROR.INVALID_PURCHASE_AMOUNT);
  }
}


export default calculateTicketCount;
