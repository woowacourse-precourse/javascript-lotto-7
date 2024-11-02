import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class LottoModel{
  #userPrice
  #winningNumber
  #bonusNumber

  constructor() {
    this.#userPrice = 0;
    this.lottoList = [];
    this.#winningNumber = [];
    this.#bonusNumber;
    this.userDetails = {
      firstPlace : 0,
      secondPlace : 0,
      thirdPlace : 0,
      fourthPlace : 0,
      fifthPlace : 0
    }
  }
  setPrice(price) {
    this.#userPrice = price;
  }

  generateLottoNumber() {
    const numberOfLotto = this.#userPrice/1000;
    for (let i = 0; i < numberOfLotto; i++) {
      let number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      let lotto = new Lotto(number);
      this.lottoList.push(lotto);
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
  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }
  setWinningStatistics() {
    this.lottoList.forEach((lotto) => {
      let lottoRank = lotto.compareLotto(this.#winningNumber, this.#bonusNumber);
      if(lottoRank in this.userDetails){
        this.userDetails[lottoRank] += 1;
      }
    })
  }
  getStatistics() {
    return this.userDetails;
  }


}

export default LottoModel;