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

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error(
          "[ERROR] 숫자는 반드시 정수이며, 범위는 1-45이어야 합니다."
        );
      }
    }
  }

  getFormattedLottoNumbers() {
    let formattedResult = "";
    for (let i = 0; i < this.#numbers.length; i++) {
      formattedResult += this.#numbers[i] + ", ";
    }
    return "[" + formattedResult.slice(0, -2) + "]";
  }
  countMatchingLotto(winningNumbers, bonusNumber) {
    let matchedCount = winningNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;
    return [matchedCount, this.#numbers.includes(bonusNumber)];
  }
}

export default Lotto;
