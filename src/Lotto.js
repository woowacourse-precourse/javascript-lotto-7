// Lotto 클래스를 사용하여 로또 번호를 관리하는 클래스
class Lotto {
  #numbers; // 프라이빗 필드로 numbers 선언

  constructor(numbers) {
    this.#validate(numbers); // 유효성 검사
    this.#numbers = numbers; // 유효한 경우에만 필드에 할당
  }

  // numbers 배열이 유효한지 확인하는 메서드
  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개의 숫자여야 합니다.");
    }
    if (!numbers.every(num => typeof num === 'number' && num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
  }
  
  // numbers 필드에 저장된 로또 번호를 반환하는 메서드
  getNumbers() {
    return [...this.#numbers]; // numbers 배열의 복사본을 반환하여 외부에서의 변경을 방지
  }
}

// Lotto 클래스를 외부에서 사용할 수 있도록 export
export default Lotto;
