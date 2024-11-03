import { Console, Random } from "@woowacourse/mission-utils";
class Lotto {
  #numbers; // 프라이빗 필드를 뜻함
  // 로또 클래스 생성자 함수
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  async InputBonus() {
    const BONUS_NUM = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요: "
    );
    return Number(BONUS_NUM);
  }
}

export default Lotto;
