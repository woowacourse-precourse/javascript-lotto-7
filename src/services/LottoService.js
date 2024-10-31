import Lotto from "../model/Lotto";
import generateLandomNumber from "../utils/generateLandomNum";

class LottoService {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoService;
