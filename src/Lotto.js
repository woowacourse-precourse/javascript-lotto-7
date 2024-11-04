class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    let isValid = false;
    while(!isValid) {
      try{
        if (numbers.length !== 6) {
          throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
      } catch(e) {
        console.error(e.message);
      }
    }

  }

  // TODO: 추가 기능 구현
}

export default Lotto;
