import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";

class Exception {
  constructor() {}

  validatePrice(price) {
    if (price % 1000 !== 0 || price === "" || price < 1) {
      throw new Error("[ERROR] 구입 금액을 1000 단위로 입력해주세요.");
    }
    return price;
  }

  validateWinNumbers(numbers) {
    // 로또 번호가 6개가 아닐 경우

    if (numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    // 로또 번호가 1부터 45까지의 수가 아닐 경우
    let rangeInWinNumber = numbers.every((val) => 0 < val && val < 46);
    if (rangeInWinNumber !== true) {
      Console.print("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    }

    // 로또 번호가 정수가 아닐 경우
    let isInteger = numbers.every((val) => val % 1 === 0);
    if (isInteger !== true) {
      Console.print("[ERROR] 로또 번호는 1부터 45까지의 정수여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 정수여야 합니다.");
    }

    // 로또 번호가 중복 될 경우
    let setNumbers = [...new Set(numbers)];
    if (setNumbers.length !== numbers.length) {
      Console.print("[ERROR] 로또 번호를 중복으로 작성하였습니다.");
      throw new Error("[ERROR] 로또 번호를 중복으로 작성하였습니다.");
    }
  }

  // 보너스 번호 입력 예외 상황
  validateBonusNumber(number, winNumbers) {
    // 보너스 번호가 1부터 45까지의 수가 아닐 경우
    if (winNumbers.includes(number)) {
      Console.print("[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.");
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.");
    } else if (
      number < 1 ||
      number > 45 ||
      number === "" ||
      isNaN(number) ||
      number % 1 !== 0
    ) {
      Console.print("[ERROR] 보너스 번호를 1부터 45까지의 수로 입력해주세요.");
      throw new Error(
        "[ERROR] 보너스 번호를 1부터 45까지의 수로 입력해주세요."
      );
    }

    return Number(number);
  }
}

export default Exception;
