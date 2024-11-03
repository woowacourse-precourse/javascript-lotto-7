import { Random } from "@woowacourse/mission-utils";
import Lotto from "../components/Lotto.js";
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBER_AMOUNT,
} from "../constant.js";

function createLotto() {
  const buyNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_MIN_NUMBER,
    LOTTO_MAX_NUMBER,
    LOTTO_NUMBER_AMOUNT
  ).sort((a, b) => a - b);

  return new Lotto(buyNumbers);
}

export function playLotto(quantity, purchased) {
  for (let i = 0; i < quantity; i++) {
    const purchasedNumbers = createLotto();
    purchased.push(purchasedNumbers.numbers);
    purchasedNumbers.printNumbers();
  }
}
