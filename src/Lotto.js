import * as MissionUtils from "@woowacourse/mission-utils";
import { validatePickedNumbers } from "../src/error.js";

class Lotto {
  #numbers; // 프라이빗 변수: 로또 번호를 저장

  constructor(numbers) {
    this.#validate(numbers);  // 전달된 numbers가 유효한지 확인
    this.#numbers = [...numbers].sort((a, b) => a - b); // 전달된 numbers 배열을 복사한 후, 오름차순 정렬하여 #numbers에 저장.
  }

  #validate(numbers) {  // numbers 매개변수의 유효성을 검사
    if (!Array.isArray(numbers)) {  // 전달된 값이 배열인지 확인
      throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
    }
    if (numbers.length !== 6) { // 로또 번호가 정확히 6개인지 확인
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    validatePickedNumbers(numbers);
  }
                          
  getNumbers() {
    return this.#numbers;
  }
}

export function generateLottos(count) {
return Array.from({ length: count }, () => {  // Array.from : 새로운 배열 생성 메서드. 길이는 count
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return new Lotto(numbers);  // new : 새로운 객체를 생성. Lotto(numbers) : Lotto 클래스의 생성자를 호출
  });
}


export default Lotto;