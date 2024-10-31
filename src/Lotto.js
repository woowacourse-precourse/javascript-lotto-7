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

  isEqual(numbers)
  {
    if(JSON.stringify(numbers) === JSON.stringify(this.#numbers)){
      return true;
    }
    return false;
  }
}


export default Lotto;
