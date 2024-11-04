import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoList {
  #lottoNum; // 로또 개수
  #lottos; // 로또 배열

  constructor(lottoNum) {
    this.#lottoNum = lottoNum;
    this.#lottos = [];
    this.#generateLottos(this.#lottoNum);
  }

  #generateLottos(lottoNum) {
    for (var i = 0; i < lottoNum; i++) {
      this.#lottos.push(new Lotto(this.#makeRandomNum()));
    }
  }

  #makeRandomNum() {
    const lottoArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoArr.sort((a, b) => a - b);
  }

  getLottoList() {
    return this.#lottos;
  }
}

export default LottoList;
