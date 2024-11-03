import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export function generateLottoNum(count) {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 45;
  const NUMBER_OF_LOTTO = 6;

  let lottoArray = [];
  for (let i = 0; i < count; i++) {
    let lotto = new Lotto(
      Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_OF_LOTTO)
    );
    lotto.sort();
    lottoArray.push(lotto);
  }
  return lottoArray;
}
