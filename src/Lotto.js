// 당첨번호 검증 후 보너스 번호와 함침.
class Lotto {
  #numbers; // 당첨 번호

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  // 당첨번호 검증
  #validate(numbers) {
    //로또 번호 개수
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    //중복 확인
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    // 당첨번호 영역 확인
    numbers.forEach((num) => {
      if (isNaN(num) || num < 1 || num > 45) {
        throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 정수여야 합니다.');
      }
    });
  }

  // 당첨 번호 반환
  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
