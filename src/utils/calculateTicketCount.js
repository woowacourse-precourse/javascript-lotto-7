import { LOTTO_PRICE } from "../constants/lotto.js";
import Validation from "../Validation.js";

const calculateTicketCount = (purchaseAmount) => {
  checkError(purchaseAmount);

  return purchaseAmount / LOTTO_PRICE;
};

const checkError = (purchaseAmount) => {
  Validation.checkIsEmpty(purchaseAmount);
  Validation.checkIsNumber(purchaseAmount);
  Validation.checkIsDivisibleByLottoPrice(purchaseAmount);
}


export default calculateTicketCount;
