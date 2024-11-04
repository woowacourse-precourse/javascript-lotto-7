import LottoNumber from "../../LottoNumber.js";
import Lotto from "../../Lotto.js";
import BonusNumber from "./BonusNumber.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  static create(numbers) {
    const validatedNumbers = numbers.map((number) => new LottoNumber(number).number);
    return new WinningLotto(validatedNumbers);
  }

  addBonusNumber(bonusNumber) {
    const bonusNumberInstance = new BonusNumber(bonusNumber, this.numbers);
    return this.#bonusNumber = bonusNumberInstance.number;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
