import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers, retry = true) {
    if (numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");

      if (retry) {
        let replayInputWinNumbers = new Input();
        replayInputWinNumbers.WinLottoNumbers();
      } else {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
    }

    // TODO: 추가 기능 구현
  }
}
export default Lotto;
