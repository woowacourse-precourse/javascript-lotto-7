import { ERROR_MESSAGES } from '../config/errors.js';

class Lotto {
  #numbers;

  // Lotto 클래스 생성자
  // - 6개의 로또 번호를 저장 및 관리
  constructor(numbers) {
    this.#validate(numbers); // 번호 유효성 검증
    this.#numbers = [...numbers].sort((a, b) => a - b); // 번호를 오름차순으로 정렬하여 저장
  }

  // 번호 유효성 검증 메소드
  // - 6개 번호인지 확인
  // - 각 번호의 범위가 1 ~ 45 사이인지 확인
  // - 중복된 번호가 없는지 확인
  #validate(numbers) {
    // 번호의 개수가 6개가 아닌 경우 예외 발생
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }

    // 각 번호가 1 ~ 45 범위 내에 있는지 확인
    const isValidRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!isValidRange) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }

    // 중복된 번호가 있는지 확인
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  // 번호 반환 메소드
  // - 로또 번호를 반환
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

