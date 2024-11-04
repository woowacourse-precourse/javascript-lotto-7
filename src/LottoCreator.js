import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const LOTTO_PRICE = 1000;

class LottoCreator {
  getLottoCount(amount) {
    return Math.floor(amount / LOTTO_PRICE);
  }

  createLotto(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottos.push(new Lotto(lottoNumber));
    }
    return lottos;
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }
}

export default LottoCreator;
