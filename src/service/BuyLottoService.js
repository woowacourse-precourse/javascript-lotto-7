import PriceValidator from '../utils/validators/PriceValidator.js';

class BuyLottoService {
  constructor() {
    this.priceValidator = new PriceValidator();
  }

  checkPurchasePrice(price) {
    const checkPrice = Number(price);
    this.priceValidator.allRunPriceValidator(checkPrice);
    return checkPrice;
  }

  checkLottoAmount(price) {
    const LottoQuantity = price / 1000;
    return LottoQuantity;
  }
}
export default BuyLottoService;
