import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const PICK_COUNT = 6;

export default function generateLotto() {
  const Numbers = Random.pickUniqueNumbersInRange(
    MIN_NUMBER,
    MAX_NUMBER,
    PICK_COUNT
  );
  return new Lotto(Numbers);
}
