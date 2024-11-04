import { Random } from "@woowacourse/mission-utils";
import { lotto } from "../constants/lottoConstants.js";

export function generateLottos(count) {
  const lottos = [];

  for (let lottoCount = 0; lottoCount < count; lottoCount++) {
    const numbers = Random.pickUniqueNumbersInRange(
      lotto.NUMBER_MIN,
      lotto.NUMBER_MAX,
      lotto.NUMBER_COUNT
    );

    numbers.sort((a, b) => a - b);

    lottos.push(new Lotto(numbers));
  }

  return lottos;
}
