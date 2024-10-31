import Lotto from "../model/Lotto.js";
import generateLandomNumber from "../utils/generateLandomNum.js";

class LottoService {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  getLottos() {
    return this.#lottos;
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumber = generateLandomNumber(1, 45, 6);
      this.#lottos.push(new Lotto(lottoNumber));
    }
  }
}

export default LottoService;
