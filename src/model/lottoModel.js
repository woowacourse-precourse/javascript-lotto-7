import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { PRICE } from "../constants/lottoDetails.js";

class LottoModel{
  #userPrice
  #winningNumber
  #bonusNumber

  constructor() {
    this.#userPrice = 0;
    this.lottoList = []; // 로또 객체 정보를 담고 있다.
    this.#winningNumber = [];
    this.#bonusNumber;
    this.userDetails = {
      fifthPlace : 0,
      fourthPlace : 0,
      thirdPlace : 0,      
      secondPlace : 0,
      firstPlace : 0,
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

  calculateProfit() {
    let total = 0;
    for (const [key, count] of Object.entries(this.userDetails)) {
      total += PRICE[key]*count;
    };
    const profit = (total/this.#userPrice)*100;
    return Math.round(profit*100)/100;
  }
}

export default LottoModel;