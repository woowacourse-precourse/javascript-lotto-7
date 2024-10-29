class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  compareWinning(winningNumbers) {
    let correct = 0;
    this.#numbers.forEach((i) => {
      if (winningNumbers.includes(i)) return correct++;
    });

    return correct;
  }
}

export default Lotto;
