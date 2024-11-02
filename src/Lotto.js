class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    // 쉼표 5개로 이루어져있는지 체크
    const arr = [...numbers];
    const onlyNumber = arr.filter((number) => number === ',');
    if (onlyNumber.length !== 5) {
      throw new Error('[ERROR] 로또 번호는 쉼표(,) 로 구분되어야 합니다.');
    }
  }
}

export default Lotto;
