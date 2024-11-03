import Lotto from "../model/Lotto.js";
import { LOTTO_DATA } from "../constant/Data.js";
import { Random } from "@woowacourse/mission-utils";

class GetNumber {
  static generateLottos() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(LOTTO_DATA.minNum, LOTTO_DATA.maxNum, LOTTO_DATA.lottoLength)
    ).getNumber();
  }

  static winningLotto(lotto) {
    return new Lotto(lotto.split(",").map((number) => number.replace(/ /g, ""))).getNumber();
  }
}

export default GetNumber;
