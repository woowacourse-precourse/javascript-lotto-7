import Validate from './Validate.js';

class LottoMachine {
  #lottoNums;
  constructor(money) {
    Validate.validateMoney(money);
    this.#lottoNums = parseInt(money / 1000, 10);
  }
}

export default LottoMachine;
