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
    if (!Array.isArray(numbers) || numbers.some(num => num === undefined || typeof num !== 'number' || isNaN(num))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (!numbers.every(num => Number.isInteger(num) && num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  checkRank(purchasedNumbers, bonusNumber) {

    const matchCount = purchasedNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;

    const hasBonus = purchasedNumbers.includes(bonusNumber);

    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 6;
  }
}

export default Lotto;
