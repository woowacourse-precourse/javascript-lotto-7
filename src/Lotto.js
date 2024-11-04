class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  //유효성 검사하는 거
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이여야 합니다.");
      }
    }
  }

   RandomLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }

  BonusNumber() {
    let bonusNumber;
    let isUnique = false;
    while (!isUnique) {
      bonusNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1);

      if (!this.#numbers.includes(bonusNumber)) {
        isUnique = true;
      }
    }

    return bonusNumber; 
  }
  display() {
    const bonusNumber = this.BonusNumber;
    MissionUtils.Console.print(` [${this.#numbers.join(", ")}]`);
    MissionUtils.Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default Lotto;
