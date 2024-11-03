import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoMachine {
  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = new Lotto(lottoNumbers);
      lottos.push(lotto);
    }
    return lottos;
  }
}

export default LottoMachine;
