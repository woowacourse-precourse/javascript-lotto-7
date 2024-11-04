import { Console } from "@woowacourse/mission-utils";
import getRandomNumbers from "../utils/random.js";

const printLottoTickets = (lottoTickets) => {
  const NumberOfPurchases = `${lottoTickets.length}개를 구매했습니다.`;
  const ticketLines = lottoTickets
    .map((ticket) => `[${ticket.join(", ")}]`)
    .join("\n");
  Console.print(`\n${NumberOfPurchases}\n${ticketLines}`);
};
