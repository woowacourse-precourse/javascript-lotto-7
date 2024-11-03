import { MissionUtils } from "@woowacourse/mission-utils";
class Lotto {
  #numbers;

  constructor(numbers) {
    if (
      this.#validate(numbers) &
      this.#numbers1to45(numbers) &
      this.#noRepeats(numbers)
    ) {
      this.#numbers = number;
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // 입력한 숫자들이 1에서 45까지인지 확인한다
  #numbers1to45(numbers) {
    // 입력한 것들이 숫자인지 확인한다
    for (let number of numbers) {
      if (
        ("" + parseInt(number) != "" + number) |
        (number < 1) |
        (number > 45)
      ) {
        throw new Error("[ERROR] 로또 번호는 1에서 45까지 숫자이어야 합니다.");
      }
    }
    return true;
  }

  //입력한 숫자들이 중복된 것이 있는지 확인한다
  #noRepeats(numbers) {
    let CHECK_REPEAT = new Set();
    for (let number of numbers) CHECK_REPEAT.add(number);
    if (CHECK_REPEAT.size != numbers.length) {
      console;
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    }
    return true;
  }

  addBonusDraw(draw, bonus) {
    let TEMP_NUMBERS = [...draw];
    if (this.#numbers1to45([bonus])) TEMP_NUMBERS.push(bonus);
    if (this.#noRepeats(TEMP_NUMBERS)) this.#numbers = TEMP_NUMBERS;
    return [draw, bonus];
  }

  checkPurchase(purchaseAmount) {
    if (isNaN(purchaseAmount) | (purchaseAmount < 0))
      throw new Error("[ERROR] 숫자만 입력하세요.");
    const change = "" + parseInt(purchaseAmount / 1000) * 1000;
    const orig = "" + purchaseAmount;
    if (purchaseAmount < 1000)
      throw new Error("[ERROR] 한 로또 당 1000원 입니다.");
    if (change != orig) throw new Error("[ERROR] 잔돈은 계산하지 않습니다.");
    return purchaseAmount;
  }

  generateLotto(purchase) {
    let LOTTO_RESULTS = [];
    let LOTTO_RESULT;
    for (let COUNT = 0; COUNT < parseInt(parseInt(purchase) / 1000); COUNT++) {
      LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(LOTTO_RESULT);
      LOTTO_RESULTS.push(LOTTO_RESULT);
    }
    return LOTTO_RESULTS;
  }
}

export default Lotto;
