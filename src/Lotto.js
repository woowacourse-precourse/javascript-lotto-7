import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(input) {
    input = this.#str2Arr(input);
    this.#validate(input);
    this.#numbers = input.map(Number);
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      this.#validateNumber(number);
    });
    this.#validateNumbers(numbers);
  }
  #validateNumber(number) {
    if (number === "") {
      throw new Error("공백은 입력될 수 없습니다.");
    }
    if (isNaN(number)) {
      throw new Error("숫자를 입력해주세요.");
    }
    if (number > 45 || number < 1) {
      throw new Error("1이상 45이하의 숫자를 입력해주세요.");
    }
  }
  #validateNumbers(numbers) {
    this.#validateIsSix(numbers);
    this.#validateIsUnique(numbers);
  }
  #validateIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  #validateIsUnique(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 중복되는 번호는 입력될 수 없습니다.");
    }
  }
  // ,을 구분자로 배열을 리턴하는 함수
  #str2Arr(numbers) {
    return numbers.split(",");
  }
  // TODO: 추가 기능 구현
  async inputBonusNumber() {
    const bonusNumber = String(
      await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")
    );
    this.#validateNumber(bonusNumber);
    this.#numbers.push(Number(bonusNumber));
    this.#validateIsUnique(this.#numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
