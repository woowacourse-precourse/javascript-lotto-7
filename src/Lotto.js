import { MissionUtils } from '@woowacourse/mission-utils';

const NUMBER_PATTERN = /^\d+$/;
const NUMBER_COMMA_PATTERN = /^\d+(,\d+)*$/;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(
        '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
      );
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 중복된 수가 입력될 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
  static generateIssuedLottos(count) {
    let issuedLottos = [];
    for (let i = 0; i < count; i++) {
      issuedLottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
    return issuedLottos;
  }

  static validateWinningNumbers(winningNumbers) {
    if (!NUMBER_COMMA_PATTERN.test(winningNumbers)) {
      throw new Error(
        '[ERROR] 당첨 번호는 숫자를 쉼표(,)로 구분해서 입력해주세요.'
      );
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (!NUMBER_PATTERN.test(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자로 입력해주세요.');
    }

    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error(
        '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
      );
    }
    if (winningNumbers.some((number) => number === Number(bonusNumber))) {
      throw new Error(
        '[ERROR] 당첨 번호 6개와 보너스 번호는 중복이 불가능합니다.'
      );
    }
  }

  get winningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
