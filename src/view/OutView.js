import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/outputMessages.js";

export class OutputView {
  OutputBoughtNumber(boughtNumber) {
    Console.print(`${boughtNumber}` + OUTPUT_MESSAGES.HOW_BOUGHT_NUMBER);
  }

  OutputLottoNumberArray(lottoNumberArray) {
    lottoNumberArray.map(Array => Console.print(Array))
  }
}
