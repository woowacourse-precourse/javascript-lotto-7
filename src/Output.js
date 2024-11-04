import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Output {
  static printTicketCount(ticketCount) {
    Console.print(`\n${ticketCount}개를 구매했습니다.`);
  }

  static printLottoNumbers(numbers) {
    const lotto = new Lotto(numbers);
    const lottoNumbers = lotto.getLottoNumbers.join(", ");
    Console.print(`[${lottoNumbers}]`);
  }
}

export default Output;
