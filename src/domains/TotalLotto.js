import CONSTANT from "../constants/costant.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class TotalLotto {
  #lottos;

  constructor(count){
    this.#makeLottoList(count);
  }

  #makeLottoList(count) {
    this.#lottos = Array.from({ length: count }).map(() => this.#randomLotto());
  }
 
  #randomLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_CANSTANT.MIN_LOTTO_NUMBER,
      CONSTANT.LOTTO_CANSTANT.MAX_LOTTO_NUMBER,
      CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH
    );

    return new Lotto(randomNumbers);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default TotalLotto;
