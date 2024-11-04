import { Console, Random } from "@woowacourse/mission-utils";
import { lotto, prizeMoney } from "../constants/lottoConstants.js";
import { calculateYield, getMatchedCount } from "../utils/lottoUtils.js";
import Lotto from "../models/lotto.js";

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
  Console.print(`\n${lottos.length}개를 구매했습니다.`);

  lottos.forEach((lotto) => {
    Console.print(`[${lotto.getNumbers().join(", ")}]`);
  });
}

function calculateWinsCount(lottos, winningNumbers, bonusNumber) {
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

function calculateLottoYield(resultCount, purchaseAmount) {
  const totalPrize =
    resultCount.FIRST * prizeMoney.FIRST +
    resultCount.SECOND * prizeMoney.SECOND +
    resultCount.THIRD * prizeMoney.THIRD +
    resultCount.FOURTH * prizeMoney.FOURTH +
    resultCount.FIFTH * prizeMoney.FIFTH;

  return calculateYield(totalPrize, purchaseAmount);
}

export function printLottoResult(
  lottos,
  winningNumbers,
  bonusNumber,
  purchaseAmount
) {
  const resultCount = calculateWinsCount(lottos, winningNumbers, bonusNumber);
  const lottoYield = calculateLottoYield(resultCount, purchaseAmount);

  Console.print("\n당첨 통계\n---");
  Console.print(
    `3개 일치 (${prizeMoney.FIFTH.toLocaleString()}원) - ${resultCount.FIFTH}개`
  );
  Console.print(
    `4개 일치 (${prizeMoney.FOURTH.toLocaleString()}원) - ${
      resultCount.FOURTH
    }개`
  );
  Console.print(
    `5개 일치 (${prizeMoney.THIRD.toLocaleString()}원) - ${resultCount.THIRD}개`
  );
  Console.print(
    `5개 일치, 보너스 볼 일치 (${prizeMoney.SECOND.toLocaleString()}원) - ${
      resultCount.SECOND
    }개`
  );
  Console.print(
    `6개 일치 (${prizeMoney.FIRST.toLocaleString()}원) - ${resultCount.FIRST}개`
  );
  Console.print(`총 수익률은 ${lottoYield}%입니다.`);
}
