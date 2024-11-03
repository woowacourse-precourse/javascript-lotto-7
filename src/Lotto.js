class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if ( !Array.isArray( numbers ) || numbers.length !== 6 ) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const uniqueNumbers = new Set( numbers );
    if ( uniqueNumbers.size !== 6 ) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    if ( !numbers.every( num => num >= 1 && num <= 45 )) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  matchCount(winningNumbers) {
    return this.#numbers.filter( num => winningNumbers.includes( Number( num )) ).length;
  }

  hasBonus( bonusNumber ) {
    return this.#numbers.includes( Number(bonusNumber) );
  }
}

export default Lotto;
