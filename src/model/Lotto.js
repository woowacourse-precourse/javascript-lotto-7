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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
    
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // 당첨 번호 일치 개수를 반환
  getMatchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  // 보너스 번호 일치 여부 확인
  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  // private으로 선언된 numbers를 외부에서 확인하기 위한 Getter
  get Numbers() {
    return this.#numbers;
  }
}

export default Lotto;
