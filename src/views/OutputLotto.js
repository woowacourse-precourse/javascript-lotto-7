import { Console } from "@woowacourse/mission-utils";
import { SYSTEM_MESSAGES } from "../constants/SystemMessages.js";

class OutputLotto {
  showLottoNumbers(array) {
    Console.print(SYSTEM_MESSAGES.print_purchase_lotto(array.length));
    array.forEach((ticket) => {
      const numberToStr = "[" + ticket.join(", ") + "]";
      Console.print(numberToStr);
    });
  }
}

export default OutputLotto;
