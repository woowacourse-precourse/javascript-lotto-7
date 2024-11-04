import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export const getLotto = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  const lotto = new Lotto(lottoNumbers);
  return lotto;
};
