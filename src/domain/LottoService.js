import Lotto from "./Lotto.js";
import LottoRepository from "./LottoRepository.js";
import { LOTTO_RELATED_CONSTANTS } from "../constants/constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoService {
  #lottoRepository;
  #random

  constructor(){
    this.#lottoRepository = new LottoRepository();
    this.#random = MissionUtils.Random.pickNumberInRange;
  }

  #generateRandomLotto() {
    const lottoNumbers = this.#random(LOTTO_RELATED_CONSTANTS.lottoRangeStart, LOTTO_RELATED_CONSTANTS.lottoRangeEnd, LOTTO_RELATED_CONSTANTS.lottoLength);
    lottoNumbers.sort((a, b) => a - b);
    this.#lottoRepository.saveLotto(lottoNumbers);
  }
  
  generateLottos(number) {
    for (let idx = 0; idx < number; idx++) {
      this.#generateRandomLotto();
    }
  }
  
  purchaseLottos(payment) {
    const numberOfPurchase = payment / LOTTO_RELATED_CONSTANTS.lottoPrice;
    return numberOfPurchase;
  }

}

export default LottoService;