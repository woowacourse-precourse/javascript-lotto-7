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
}

export default Lotto;
