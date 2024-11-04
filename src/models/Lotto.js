import { validateLottoNumbers } from "../utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLottoNumbers(numbers); // 유효성 검사 추가
    this.#numbers = numbers || this.generateRandomNumbers();
  }

  // 로또 번호 6개를 랜덤으로 생성 (1 ~ 45 중 중복되지 않는 숫자)
  generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      numbers.add(number);
    }
    return Array.from(numbers).sort((a, b) => a - b); // 오름차순 정렬
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
