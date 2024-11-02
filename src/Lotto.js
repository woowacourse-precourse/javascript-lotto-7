import { Console } from '@woowacourse/mission-utils';

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

    const regex = /^[0-9]*$/;
    numbers.forEach((number) => {
      if (!regex.test(number)) {
        throw new Error('[ERROR] 숫자만 입력해 주세요.');
      }

      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });

    const numbersSet = new Set(numbers);
    if (numbers.length != numbersSet.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  get getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    const formattedNumbers = JSON.stringify(this.#numbers).replace(/,/g, ', ');
    Console.print(formattedNumbers);
  }
}

export default Lotto;
