import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import Lotto from "../Lotto.js";

class LottoModel {
  #lotto;

  constructor(amount) {
    this.#lotto = Array.from({ length: amount }).map(
      () => new Lotto(generateLottoNumbers())
    );
  }

  // 로또 번호 생성
  getLottoTickets() {
    return this.#lotto.map((lotto) => lotto.getNumber());
  }

  // 당첨 통계 계산
}

export default LottoModel;
