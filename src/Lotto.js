class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = new Set(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const set = new Set(numbers);
    if(set.size !== numbers.length){
      throw new Error('[ERROR] 로또 번호는 증복될 수 없습니다.');
    }
    numbers.forEach(value => {
      if (value < 1 || 45 < value) {
        throw new Error('[ERROR] 로또번호는 1~45의 숫자만 가능합니다.');
      }
    });
  }
  
  // TODO: 추가 기능 구현
}

export default Lotto;
