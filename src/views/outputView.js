import { Console } from "@woowacourse/mission-utils";
import USER_OUTPUT from "../constants/Logs.js";

const printLottoTickets = (lottoTickets) => {
  const NumberOfPurchases = `${lottoTickets.length}개를 구매했습니다.`;
  const ticketLines = lottoTickets
    .map((ticket) => `[${ticket.join(", ")}]`)
    .join("\n");
  Console.print(`\n${NumberOfPurchases}\n${ticketLines}`);
};

const createLottoResultString = (lottoResult) => {
  const outputKeys = ["fifth", "forth", "third", "second", "first"];
  const outpustLists = outputKeys.map(
    (key) => `${USER_OUTPUT[key.concat("Prize")]}${lottoResult[key]}개`
  );
  const resultString = `\n당첨 통계\n---\n${outputLists.join("\n")}`;

  return resultString;
};
