import { Console } from "@woowacourse/mission-utils";
import {
  LOTTO_COAST_UNIT,
  LOTTO_FIFTH_PRIZE,
  LOTTO_FIRST_PRIZE,
  LOTTO_FOURTH_PRIZE,
  LOTTO_SECOND_PRIZE,
  LOTTO_THIRD_PRIZE,
} from "../constant.js";

function calculateRate(results, quantity) {
  const sumResults = results.reduce((result, sum, index) => {
    const prize = [
      LOTTO_FIFTH_PRIZE,
      LOTTO_FOURTH_PRIZE,
      LOTTO_THIRD_PRIZE,
      LOTTO_SECOND_PRIZE,
      LOTTO_FIRST_PRIZE,
    ][index];
    return result + sum * prize;
  }, 0);

  const total = quantity * LOTTO_COAST_UNIT;
  const rate = (sumResults / total) * 100;

  return Math.round(rate * 100) / 100;
}

export function output(results, quantity) {
  const rate = calculateRate(results, quantity);

  Console.print(`당첨 통계\n---`);
  Console.print(
    `3개 일치 (${LOTTO_FIFTH_PRIZE.toLocaleString()}원) - ${results[0]}개`
  );
  Console.print(
    `4개 일치 (${LOTTO_FOURTH_PRIZE.toLocaleString()}원) - ${results[1]}개`
  );
  Console.print(
    `5개 일치 (${LOTTO_THIRD_PRIZE.toLocaleString()}원) - ${results[2]}개`
  );
  Console.print(
    `5개 일치, 보너스 볼 일치 (${LOTTO_SECOND_PRIZE.toLocaleString()}원) - ${results[3]}개`
  );
  Console.print(
    `6개 일치 (${LOTTO_FIRST_PRIZE.toLocaleString()}원) - ${results[4]}개`
  );
  Console.print(`총 수익률은 ${rate}%입니다.\n`);
}
