import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length > 6) {
      throw new Error('[ERROR] 로또 번호가 6자리보다 많이 생성됨!');
    }
    if (numbers.length < 6) {
      throw new Error('[ERROR] 로또 번호가 6자리보다 적게 생성됨!');
    }
    // 위 과정에서 정상인 numbers가 set을 통해 수가 줄어들 경우 중복된 번호 판단
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 값이 있음!');
    }
  }

  printNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
