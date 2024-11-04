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
    console.log(this.#result);
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
}

export default WinningLotto;
