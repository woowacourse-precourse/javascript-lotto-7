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
    if (uniqueNumbers.size !== 6) { 
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다."); }
  }

  getNumbers() {
    return this.#numbers;
  }

  static getMatchedCount(numbers, winNumbers) {
    let numbersToArray = numbers.getNumbers();
    return numbersToArray.filter(num => winNumbers.includes(num)).length;
  }
   

}
export default Lotto;
