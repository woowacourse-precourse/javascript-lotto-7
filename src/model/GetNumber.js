import Lotto from "./Lotto.js";
import { LOTTO_DATA } from "../constant/Data.js";
import { Random } from "@woowacourse/mission-utils";

class GetNumber {
  purchaseLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_DATA.minNum,
        LOTTO_DATA.minMax,
        LOTTO_DATA.lottoLength
      )
    ).getNumber();
  }

  winningLotto(lotto) {
    return new Lotto(
      lotto.split(",").map((number) => parseInt(number.replace(/ /g, "")))
    ).getNumber();
  }
}

export default GetNumber;
