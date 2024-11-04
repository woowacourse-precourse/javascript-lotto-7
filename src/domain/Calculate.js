import { WINNING_RANK } from "../constants/message.js";

class Calculate {
  constructor(lottoNumbers, bonusNumber) {
    this.bonusNumber = bonusNumber;
    this.lottoNumbers = lottoNumbers;
    this.winningStatus = new Array(5).fill(0);
    this.totalReward = 0;
  }
}

export default Calculate;
