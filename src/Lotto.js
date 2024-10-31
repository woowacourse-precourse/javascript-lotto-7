class Lotto {
  #numbers;

  constructor(numbers) { /// 배열로 입력받은 수1
    this.#validate(numbers);
    this.#isAllNumbers(numbers);
    this.#isAllValidRange(numbers);
    this.#isAllUniqueNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현

  #isAllNumbers(numbers) {
    numbers.forEach((element) => {
      if(isNaN(Number(element))) {
        throw Error("[ERROR] 로또 번호는 숫자이어야 합니다");
      }
    });
  }

  #isAllValidRange(numbers) {
    numbers.forEach((number) => {
      if(number < 0 || number > 45) {
        throw Error("[ERROR] 로또 번호는 1에서 45사이의 수입니다");
      }
    });
  }

  #isAllUniqueNumber(numbers) {
    const copyNumbers = [];
    numbers.forEach((num) => {
      if(copyNumbers.includes(num)) {
        throw Error("[ERROR] 로또 번호 각각은 유일한 수입니다");
      }
      copyNumbers.push(num);
    });
  }
}

export default Lotto;
