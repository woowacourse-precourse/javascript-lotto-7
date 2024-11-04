import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import Lotto from "../Lotto.js";

class LottoModel {
  #lotto;

  constructor(amount) {
    this.#lotto = Array.from({ length: amount }).map(
      () => new Lotto(generateLottoNumbers())
    );
  }

  getLottoTickets() {
    return this.#lotto.map((lotto) => lotto.getNumber());
  }
}

export default LottoModel;
