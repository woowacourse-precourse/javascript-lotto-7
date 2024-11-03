import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/OutputMessage.js";

const OutputValue = {
  printLottoTicketCount(lottoQuantity) {
    Console.print(`\n${lottoQuantity}${OUTPUT_MESSAGE.PURCHASE_NUMBER}`);
  },
};

export default OutputValue;
