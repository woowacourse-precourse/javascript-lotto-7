import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const set = new Set(numbers);
    if (numbers.length != set.size){
      throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers.sort((a, b) => a - b);
  }
}

export default Lotto;
