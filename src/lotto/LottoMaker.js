import { LOTTO_MIN_PRICE, LOTTO_UNIT_PRICE } from "../constant/constants.js";
import { inValidMessages } from "../constant/message.js";
import { RandomNumberMaker } from "./RandomNumberMaker.js";
import Lotto from "./Lotto.js";

export class LottoMaker {
  makeLotto(price) {
    this.#validate(price);
    return this.#createLotto(price);
  }

  #validate(price) {
    this.#validateMinPrice(price);
    this.#validateDivisible(price);
  }

  #validateMinPrice(price) {
    if (price < LOTTO_MIN_PRICE) throw new Error(inValidMessages.minPrice);
  }

  #validateDivisible(price) {
    if (price % LOTTO_UNIT_PRICE !== 0) throw new Error(inValidMessages.priceUnit);
  }

  #createLotto(price) {
    let myLottoArr = [];
    for (let i = 0; i < (price / LOTTO_UNIT_PRICE); i++) {
      const randomNumbers = new RandomNumberMaker().makeRandomNumbers();
      myLottoArr.push(new Lotto(randomNumbers));
    }
    return myLottoArr;
  }
}
