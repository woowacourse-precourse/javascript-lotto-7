import { Random as MissionUtilsRandom, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  
  constructor(numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
