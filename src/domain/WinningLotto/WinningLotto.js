import LottoNumber from "../../LottoNumber.js";
import Lotto from "../../Lotto.js";

class WinningLotto extends Lotto {
  static create(numbers) {
    const validatedNumbers = numbers.map((number) => new LottoNumber(number).number);
    return new WinningLotto(validatedNumbers);
  }

}

export default WinningLotto;
