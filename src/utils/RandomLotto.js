import { Random } from "@woowacourse/mission-utils";
import LOTTO_CONFIG from "../static/LottoConfig.js";

const RandomLotto = {
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.numbers.MIN,
      LOTTO_CONFIG.numbers.MAX,
      LOTTO_CONFIG.numbers.LENGTH
    );
  }
};

export default RandomLotto;