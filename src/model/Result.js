import {
  LOTTO_FIRST_PRIZE,
  LOTTO_SECOND_PRIZE,
  LOTTO_THIRD_PRIZE,
  LOTTO_FOURTH_PRIZE,
  LOTTO_FIFTH_PRIZE,
} from '../constant/constant.js';

class Result {
  #winningLottoNumbers;
  #bonusNumber;
  #lotteryNumbers;
  #purchaseAmount;
  #totalPrice = 0;
  #totalRate = 0;
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

  winningResult() {
    for (let i = 0; i < this.#lotteryNumbers.length; i++) {
      const result = this.#matchingCount(this.#lotteryNumbers[i]);
      this.#winningRank(result);
    }
    this.#calculateTotalPrice();
    this.#calculateTotalRate();
  }

  #parsedNumbers(numbersString) {
    const splittedNumbers = numbersString.split(',');
    return splittedNumbers.map((item) => parseInt(item.trim()));
  }

  #matchingCount(numbersString) {
    let result = 0;
    this.#parsedNumbers(numbersString).forEach((num) => {
      if (this.#winningLottoNumbers.includes(num)) result++;
      if (result === 5 && this.#bonusNumber === num) result += 0.5;
    });
    return result;
  }

  #winningRank(result) {
    if (result === 6) this.#ranks.first++;
    if (result === 5.5) this.#ranks.second++;
    if (result === 5) this.#ranks.third++;
    if (result === 4) this.#ranks.fourth++;
    if (result === 3) this.#ranks.fifth++;
  }

  #calculateTotalPrice() {
    this.#totalPrice =
      this.#ranks.first * LOTTO_FIRST_PRIZE +
      this.#ranks.second * LOTTO_SECOND_PRIZE +
      this.#ranks.third * LOTTO_THIRD_PRIZE +
      this.#ranks.fourth * LOTTO_FOURTH_PRIZE +
      this.#ranks.fifth * LOTTO_FIFTH_PRIZE;
  }

  #calculateTotalRate() {
    this.#totalRate = ((this.#totalPrice / this.#purchaseAmount) * 100).toFixed(
      1
    );
  }

  getWinningRank() {
    return this.#ranks;
  }

  getTotalRate() {
    return this.#totalRate;
  }
}
export default Result;
