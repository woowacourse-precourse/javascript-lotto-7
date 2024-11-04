import Lotto from '../models/Lotto.js';
import { AMOUNT } from '../constants/constants.js';

class LottoController {
  #lottos = [];

  /**
   * 구입 금액에 맞게 로또 번호를 생성한다.
   * @param {number} amount - 구입 금액
   */
  generateLottos(amount) {
    const count = amount / AMOUNT.unit;

    for (let i = 0; i < count; i += 1) {
      const numbers = Lotto.generateLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto.getNumbers());
    }
  }

  /**
   * 생성된 로또 번호 목록을 반환한다.
   * @returns {number[][]} 로또 번호 배열
   */
  getLottos() {
    return this.#lottos;
  }
}

export default LottoController;
