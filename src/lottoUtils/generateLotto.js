import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";

export default function generateLotto() {
  const Numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return new Lotto(Numbers);
}
