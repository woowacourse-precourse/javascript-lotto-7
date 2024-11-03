import * as numberConfig from './config/numberConfig.js'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  getWinningNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const uiqueNumbers = new Set(numbers);
    if (uiqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.')
    }

    numbers.forEach(num => {
      if (numberConfig.LOTTO_NUM_RANGE.MIN > num || numberConfig.LOTTO_NUM_RANGE.MAX < num) {
        throw new Error('[ERROR] 당첨 번호는 1부터 45사이의 숫자만 입력할 수 있습니다.')
      }
    })
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
