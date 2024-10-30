import { MissionUtils } from '@woowacourse/mission-utils';
class Lotto {
  static START_NUMBER = 1;
  static NUMBER_COUNT = 6;
  static MAX_NUMBER = 45;
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

  pickRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.START_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.NUMBER_COUNT
    );
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
