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
    else if (new Set(numbers).size != numbers.length){
      throw new Error("[ERROR] 로또 번호는 서로 중복되선 안됩니다.");
    } 
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
