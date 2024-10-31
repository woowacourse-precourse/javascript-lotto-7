import { Console, MissionUtils } from "@woowacourse/mission-utils";

class LottoModel{
  #userPrice
  #winningNumber

  constructor() {
    this.#userPrice = 0;
    this.lottoList = [];
    this.#winningNumber = [];
  }
  setPrice(price) {
    this.#userPrice = price;
  }

  generateLottoNumber() {
    const numberOfLotto = this.#userPrice/1000;
    for (let i = 0; i < numberOfLotto; i++) {
      let number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push((number).sort((a, b) => a - b));
    }
  }
  getLottoList() {
    return this.lottoList;
  }

  setWinningNumber(numbers) {
    this.#winningNumber = numbers;
  }
  getWinningNumber() {
    return this.#winningNumber;
  }



}

export default LottoModel;