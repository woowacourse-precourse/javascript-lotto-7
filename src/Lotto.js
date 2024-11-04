import { throughErrorMessage } from './functions/Exceptions.js';

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

    if (numbers.length === 0) {
      throughErrorMessage('[ERROR] 로또 번호를 입력해주세요.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throughErrorMessage('[ERROR] 로또 번호는 중복할 수 없습니다.');
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throughErrorMessage(
          '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
        );
      }
    });
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }
}

export default Lotto;
