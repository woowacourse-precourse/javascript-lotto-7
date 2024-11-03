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
      MissionUtils.Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
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
        MissionUtils.Console.print(
          "[ERROR] 로또 번호는 1에서 45까지 숫자이어야 합니다."
        );
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
      MissionUtils.Console.print("[ERROR] 로또 번호는 중복이 없습니다.");
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    }
    return true;
  }

  addBonusDraw(draw, bonus) {
    let TEMP_NUMBERS = [...draw];
    if (this.#numbers1to45([bonus])) TEMP_NUMBERS.push(bonus);
    if (this.#noRepeats(TEMP_NUMBERS)) this.#numbers = [[...draw], bonus];
    return [draw, bonus];
  }

  matchResults(lotto_results) {
    let MATCH_LIST = [];
    let BONUS_COUNT = 0;
    let MATCH_COUNT = 0;
    for (let RESULT of lotto_results) {
      MATCH_COUNT = 0;
      for (let NUM_R of RESULT) MATCH_COUNT += this.#matchOneNum(NUM_R);
      if (MATCH_COUNT == 5)
        BONUS_COUNT += this.#matchBonus(RESULT, this.#numbers[1]);
      MATCH_LIST.push(MATCH_COUNT);
    }
    const MATCH_RESULT = this.#checkResults(MATCH_LIST, BONUS_COUNT);
    this.#printResults(MATCH_RESULT, BONUS_COUNT);
    return [MATCH_RESULT, BONUS_COUNT];
  }

  calcReward(MATCH_RESULT, BONUS_COUNT) {
    const REWARD_GUIDE = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
    };
    let REWARD_AMOUNT = 0;

    for (let MATCH_COUNT = 3; MATCH_COUNT <= 6; MATCH_COUNT++)
      REWARD_AMOUNT += MATCH_RESULT[MATCH_COUNT] * REWARD_GUIDE[MATCH_COUNT];
    REWARD_AMOUNT += BONUS_COUNT * 30000000;

    return REWARD_AMOUNT;
  }

  #matchBonus(RESULT, bonus_num) {
    for (let NUM_R of RESULT) {
      if (bonus_num == NUM_R) return 1;
    }
    return 0;
  }

  #checkResults(MATCH_LIST, BONUS_COUNT) {
    let MATCH_RESULT = { 3: 0, 4: 0, 5: 0, 6: 0 };

    for (let MATCH_COUNT of MATCH_LIST) {
      if (MATCH_COUNT in MATCH_RESULT) MATCH_RESULT[MATCH_COUNT]++;
    }
    if (BONUS_COUNT > 0) MATCH_RESULT[5] -= BONUS_COUNT;
    return MATCH_RESULT;
  }

  #printResults(MATCH_RESULT, BONUS_COUNT) {
    const LOTTO_GUIDE = {
      3: "(5,000원)",
      4: "(50,000원)",
      5: "(1,500,000원)",
      6: "(2,000,000,000원)",
    };

    MissionUtils.Console.print(`\n당첨 통계\n---`);
    for (const [key, value] of Object.entries(MATCH_RESULT)) {
      MissionUtils.Console.print(
        `${key}개 일치 ${LOTTO_GUIDE[key]} - ${value}개`
      );
      if (key == 5)
        MissionUtils.Console.print(
          `${key}개 일치, 보너스 볼 일치 (30,000,000원) - ${BONUS_COUNT}개`
        );
    }
  }

  #matchOneNum(NUM_R) {
    for (let NUM_U of this.#numbers[0]) {
      if (NUM_U == NUM_R) {
        return 1;
      }
    }
    return 0;
  }
}

export default Lotto;
