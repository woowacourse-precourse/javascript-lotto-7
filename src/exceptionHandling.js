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
    if (numbers.length !== 6) {
      if (retry) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다."); // 예외 발생
      } else {
        return false; // 테스트 용도로 false 리턴
      }
    }
    return true;
  }
}
export default Exception;
