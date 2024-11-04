import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoMachine {
  #sortLottoNumber(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = new Lotto(lottoNumbers);
      lottos.push(lotto.getNumbers());
    }
    return this.#sortLottoNumber(lottos);
  }
}

export default LottoMachine;
