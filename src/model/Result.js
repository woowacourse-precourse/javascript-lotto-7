class Result {
  #winningLottoNumbers;
  #bonusNumber;
  #lotteryNumbers;
  #purchaseAmount;
  #ranks = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

  constructor(
    winningLottoNumbers,
    bonusNumber,
    lotteryNumbers,
    purchaseAmount
  ) {
    (this.#winningLottoNumbers = winningLottoNumbers),
      (this.#bonusNumber = bonusNumber),
      (this.#lotteryNumbers = lotteryNumbers),
      (this.#purchaseAmount = purchaseAmount);
  }
}
export default Result;
