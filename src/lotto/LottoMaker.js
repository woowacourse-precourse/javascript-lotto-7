import { LOTTO_PRICE } from "../constant/constants.js";
import { inValidMessages } from "../constant/message.js";
import { RandomNumberMaker } from "./RandomNumberMaker.js";
import Lotto from "./Lotto.js";

export class LottoMaker {
  makeLotto(price) {
    this.#validateDivisible(price);
    return this.#createLotto(price);
  }

  #validateDivisible(price) {
    if (price % LOTTO_PRICE !== 0) throw new Error(inValidMessages.priceUnit);
  }

  #createLotto(price) {
    let myLottoArr = [];
    for (let i = 0; i < (price / LOTTO_PRICE); i++) {
      const randomNumbers = new RandomNumberMaker().makeRandomNumbers();
      myLottoArr.push(new Lotto(randomNumbers));
    }
    return myLottoArr;
  }
}
