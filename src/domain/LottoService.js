import Lotto from "./Lotto.js";
import LottoRepository from "./LottoRepository.js";
import { LOTTO_RELATED_CONSTANTS } from "../constants/constants.js";
import { MATCH } from "../constants/constants.js";
import { MATCH_RANK } from "../constants/constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoService {
  #lottoRepository;
  #random

  constructor(){
    this.#lottoRepository = new LottoRepository();
    this.#random = MissionUtils.Random.pickUniqueNumbersInRange;
  }

  #generateRandomLotto() {
    const lottoNumbers = this.#random(LOTTO_RELATED_CONSTANTS.lottoRangeStart, LOTTO_RELATED_CONSTANTS.lottoRangeEnd, LOTTO_RELATED_CONSTANTS.lottoLength);
    lottoNumbers.sort((a, b) => a - b);

    const lotto = new Lotto(lottoNumbers);
    this.#lottoRepository.saveLotto(lotto);
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

  getLottos() {
    return this.#lottoRepository.getLottos();
  }

  #updateMatch(match, isHaveBonus) {
    switch(match){
      case MATCH.three : this.#lottoRepository.updateMatch(MATCH_RANK.fifit); break;
      case MATCH.four : this.#lottoRepository.updateMatch(MATCH_RANK.fourth); break;
      case MATCH.six : this.#lottoRepository.updateMatch(MATCH_RANK.first); break;
    }
    if (match == MATCH.five && !isHaveBonus){
      this.#lottoRepository.updateMatch(MATCH_RANK.third);
    }
    if (match == MATCH.five && isHaveBonus){
      this.#lottoRepository.updateMatch(MATCH_RANK.second);
    }
  }

  compareWithWinningNumbers(winningNumbers, bonusNumber) {
    const myLottos = this.getLottos();

    for (let lotto of myLottos) {
      let match = lotto.getNumbers().filter(element => winningNumbers.includes(element)).length;
      let isHaveBonus = lotto.getNumbers().includes(bonusNumber);

      this.#updateMatch(match, isHaveBonus);
    }

    return this.#lottoRepository.getMatch();
  }

  calculateRate(match, payment) {
    let matchReward = this.#lottoRepository.getMatchReward();
    let reward = match.reduce((sum, value, index) => {
      return sum + (value * matchReward[index]);
    }, 0);

    let rate = (reward / payment * LOTTO_RELATED_CONSTANTS.rate).toFixed(LOTTO_RELATED_CONSTANTS.rounding);
    return rate;
  }
}

export default LottoService;