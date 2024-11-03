import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/OutputMessage.js";

const OutputValue = {
  printLottoSummary(lottoQuantity, ticketList) {
    this.printLottoTicketCount(lottoQuantity);
    this.printLottoTicketList(ticketList);
  },

  printLottoTicketCount(lottoQuantity) {
    Console.print(`\n${lottoQuantity}${OUTPUT_MESSAGE.PURCHASE_NUMBER}`);
  },

  printLottoTicketList(ticketList) {
    ticketList.forEach((ticket) => {
      Console.print(`[${ticket.join(", ")}]`);
    });
  },
};

export default OutputValue;
