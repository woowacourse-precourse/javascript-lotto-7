import CONSTANT from "../constants/costant";

class WinningLotto {
  #result;
  #lottos;
  #winningNumbers;
  #bonus;

  constructor(lottos, winningNumbers, bonus) {
    this.#result = [0, 0, 0, 0, 0];
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonus = bonus;
  }

  resultLotto() {
    this.#lottos.map((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      let matchNum = lottoNumbers.filter((number) =>
        this.#winningNumbers.includes(number)
      ).length;

      this.#matchNum(matchNum, lottoNumbers, this.#bonus);
    });
    
    return this.#result;
  }

  #matchNum(num, lottoNumbers, bonus) {
    if (num == 5 && lottoNumbers.includes(bonus)) {
      return (this.#result[3] += 1);
    }

    if (num == 6) {
      return (this.#result[4] += 1);
    }

    if (num >= 3) {
      return (this.#result[num - 3] += 1);
    }
  }

  calculatePercent(purchase) {
    const prize = Object.values(CONSTANT.PRIZE);

    let totalPrize = this.#result.reduce((sum, num, index) => {
        return sum + num * prize[index];
    }, 0);

    const percentage = (totalPrize / purchase) * 100.0;
    return Math.ceil(percentage * 100) / 100;
  }
}

export default WinningLotto;
