import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLotto(numbers);
    this.#numbers = numbers;
  }

  setWinningNumber(winningNumber) {}

  setBonusNumber(bonusNumber) {}

  // TODO: 추가 기능 구현
}
export default Lotto;
