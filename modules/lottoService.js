import { Console, Random } from "@woowacourse/mission-utils";
import { lotto } from "../constants/lottoConstants.js";
import { getMatchedCount } from "../utils/lottoUtils.js";

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

export function printLottos(lottos) {
  lottos.forEach((lotto) => {
    Console.print(lotto.getNumbers());
  });
}

export function calculateWinsCount(lottos, winningNumbers, bonusNumber) {
  const resultCount = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };

  lottos.forEach((lotto) => {
    const matchedCount = getMatchedCount(lotto.getNumbers(), winningNumbers);
    const hasBonus = lotto.getNumbers().includes(bonusNumber);

    if (matchedCount === 6) {
      resultCount.FIRST += 1;
      return;
    }

    if (matchedCount === 5 && hasBonus) {
      resultCount.SECOND += 1;
      return;
    }

    if (matchedCount === 5) {
      resultCount.THIRD += 1;
      return;
    }

    if (matchedCount === 4) {
      resultCount.FOURTH += 1;
      return;
    }

    if (matchedCount === 3) {
      resultCount.FIFTH += 1;
      return;
    }
  });

  return resultCount;
}
