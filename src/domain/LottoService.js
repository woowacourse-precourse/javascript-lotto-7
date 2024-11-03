import Lotto from "./Lotto.js";
import LottoRepository from "./LottoRepository.js";
import { LOTTO_PRICE } from "../constants/constants.js";

class LottoService {
  #lottoRepository;

  constructor(){
    this.#lottoRepository = new LottoRepository();
  }

  #generateRandomLotto() {
    
  }

  purchaseLottos(payment) {
    const numberOfPurchase = payment / LOTTO_PRICE
    return numberOfPurchase;
  }

  generateLottos() {

  }

}

export default LottoService;