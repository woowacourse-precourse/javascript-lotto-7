import Lotto from "../Lotto";
import { intersect } from "../utils/intersect";

class WinningNumbers {
  #winningLotto;
  #bonus;
  
  constructor(numbers, bonus){
    this.#validate(numbers, bonus);
    this.#winningLotto = new Lotto(numbers);
    this.#bonus = bonus;
  }

  #validate (bonus) {
    const lotto = new Lotto(lotto);
    if (lotto.has(bonus)) {
      throw new Error('[ERROR] 당첨번호에 포함된 숫자는 보너스 숫자로 입력할 수 없습니다.');
    }
  }

  test(lotto) {
    const matched = intersect(lotto.numbers, [this.#winningLotto.numbers]);
    const bonusMatch = lotto.has(this.#bonus);
    return { matched, bonusMatch };
  }
}