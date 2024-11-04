class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    if(!isNaN(numbers)) {
      throw new Error("[ERROR] 잘못된 값 입니다.")
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 당첨 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이에 숫자여야 합니다.");
    }
    if (numbers.some(num => !Number.isInteger(num))) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  static vaildateBounsNumber(number) {
    if( number < 1  || number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 보너스 번호는 정수여야 합니다.');
    }
    
  }

  static vaildatePurchaseAmount(amount) {
    if (isNaN(amount)) {
      throw new Error("[ERROR] 금액은 숫자여야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000원 단위여야 합니다.");
    }
  }
}

export default Lotto;
