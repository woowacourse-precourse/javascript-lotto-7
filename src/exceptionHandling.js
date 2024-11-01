import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";

class Exception {
  constructor(price) {
    this.price = price;
  }

  validatePrice(price, retry = true) {
    let replayInputPrice = new Input();
    if (price % 1000 !== 0 || price === "" || price < 1) {
      Console.print("[ERROR] 구입 금액을 1000 단위로 입력해주세요.");

      // retry가 true일 때만 inputPrice() 호출
      if (retry) {
        replayInputPrice.inputPrice();
      } else {
        throw new Error("[ERROR] 구입 금액을 1000 단위로 입력해주세요.");
      }
    } else {
      replayInputPrice.purchaseNumber(price);
    }
  }

  validateWinNumbers(numbers, retry = true) {
    // 로또 번호가 6개가 아닐 경우
    if (numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");

      if (retry) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다."); // 예외 발생
      } else {
        return false; // 테스트 용도로 false 리턴
      }
    }

    // 로또 번호가 1부터 45까지의 수가 아닐 경우
    let rangeInWinNumber = numbers.every((val) => 0 < val && val < 46);
    if (rangeInWinNumber !== true) {
      Console.print("[ERROR] 로또 번호는 1부터 45까지의 수여야 합니다.");

      if (retry) {
        throw new Error("[ERROR] 로또 번호는 1부터 45까지의 수여야 합니다.");
      } else {
        return false;
      }
    }

    // 로또 번호가 정수가 아닐 경우
    let isInteger = numbers.every((val) => val % 1 === 0);
    if (isInteger !== true) {
      Console.print("[ERROR] 로또 번호는 1부터 45까지의 정수여야 합니다.");
      if (retry) {
        throw new Error("[ERROR] 로또 번호는 1부터 45까지의 정수여야 합니다.");
      } else {
        return false;
      }
    }

    return true;
  }
}
export default Exception;
