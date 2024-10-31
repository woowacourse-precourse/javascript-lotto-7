import InputManager from './InputManager';
import LottoShop from './LottoShop';
import OutputManager from './OutputManager';

class LottoBuyer {
  #purchasePrice;
  #lottoArray;

  get lottoArray() {
    return this.#lottoArray;
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }

  async purchaseLotto() {
    this.#purchasePrice = await InputManager.getPurchasePrice();

    this.#lottoArray = LottoShop.purchaseLottos(this.#purchasePrice);

    OutputManager.printPurchaseHistory(this.#lottoArray);
  }
}

export default LottoBuyer;
