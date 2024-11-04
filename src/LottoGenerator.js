import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants/Constants.js";

const LottoGenerator = {
  generate(quantity) {
    const lottos = [];
    while (lottos.length < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO.minimum,
        LOTTO.maximum,
        LOTTO.length
      );
      lotto.sort((a, b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  },
};

export default LottoGenerator;
