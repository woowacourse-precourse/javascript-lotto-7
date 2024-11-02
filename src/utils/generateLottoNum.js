import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export function generateLottoNum(count) {
  let lottoArray = [];
  for (let i = 0; i < count; i++) {
    let lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    lotto.sort();
    lottoArray.push(lotto);
  }
  return lottoArray;
}