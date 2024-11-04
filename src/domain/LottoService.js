import Lotto from "./Lotto.js";
import LottoRepository from "./LottoRepository.js";
import { LOTTO_RELATED_CONSTANTS } from "../constants/constants.js";
import { MATCH_REWARD } from "../constants/constants.js";
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

  compareWithWinningNumbers(winningNumbers, bonusNumber) {
    let matching = [0,0,0,0,0];
    const myLottos = this.getLottos();

    for (let lotto of myLottos) {
      let match = lotto.getNumbers().filter(element => winningNumbers.includes(element)).length;
      let isHave = lotto.getNumbers().includes(bonusNumber);

      switch(match.length){
        case 3 : matching[0]++; break;
        case 4 : matching[1]++; break;
        case 6 : matching[4]++; break;
      }
      if (match == 5 && !isHave){
        matching[2]++;
      }
      if (match == 5 && isHave){
        matching[3]++;
      }
    }

    return matching;
  }

  calculateRate(match, payment) {
    let matchReward = [MATCH_REWARD.fifth, MATCH_REWARD.fourth, MATCH_REWARD.third, MATCH_REWARD.second, MATCH_REWARD.first];

    let reward = match.reduce((sum, value, index) => {
      return sum + (value * matchReward[index]);
    }, 0);

    let rate = (reward / payment).toFixed(1);

    return rate;
  }
}

export default LottoService;