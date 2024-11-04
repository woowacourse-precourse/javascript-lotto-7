import { Console } from "@woowacourse/mission-utils";
import { INTEGER, LOG_MESSAGE } from "../Constants.js";
import { LOTTO_RESULT_GUIDE } from "../Contents.js";
import Consumer from "../model/Consumer.js";
import Lotto from "../model/Lotto.js";
import { MIN_PRICE } from "../validator/PriceValidator.js";

class OutputView {
  static printPriceGuide() {
    Console.print(LOG_MESSAGE.START_MESSAGE);
  }

  static printLottoTicket(consumer) {
    this.printPurchaseCount(consumer.getLottoTicket().length);

    for (let lotto of consumer.getLottoTicket()) {
      Console.print(lotto.getNumbers());
    }
  }

  static printPurchaseCount(count) {
    Console.print(LOTTO_RESULT_GUIDE.numberOfOrder, count);
  }

  static printWinningNumberGuide() {
    Console.print(LOG_MESSAGE.WINNING_NUMBER_MESSAGE);
  }
  static pritBonusNumberGuide() {
    Console.print(LOG_MESSAGE.BONUS_NUMBER_MESSGE);
  }
  static printResultGuide() {
    Console.print(LOG_MESSAGE.WINNING_STATISTICS);
  }
  static printResult(consumer) {
    this.printResultGuide();
    Console.print(
      LOTTO_RESULT_GUIDE.FIFTH_WINNING_DETAILS,
      consumer.getLottoResult()[3]
    );
    Console.print(
      LOTTO_RESULT_GUIDE.FOURTH_WINNING_DETAILS,
      consumer.getLottoResult()[4]
    );
    Console.print(
      LOTTO_RESULT_GUIDE.THIRD_WINNING_DETAILS,
      consumer.getLottoResult()[5]
    );
    Console.print(
      LOTTO_RESULT_GUIDE.SECOND_WINNING_DETAILS,
      consumer.getLottoResult()[5] - consumer.getSecondPlace()
    );
    Console.print(
      LOTTO_RESULT_GUIDE.FIRST_WINNING_DETAILS,
      consumer.getLottoResult()[6]
    );
    this.printEarningRate(consumer);
  }

  static printEarningRate(consumer) {
    let price = MIN_PRICE * consumer.getLottoTicket().length;

    let prize = consumer.getLottoResult()[3] * INTEGER.FIFTH;
    prize += consumer.getLottoResult()[4] * INTEGER.FORUTH;
    prize +=
      (consumer.getLottoResult()[5] - consumer.getSecondPlace()) *
      INTEGER.THIRD;
    prize += consumer.getLottoResult() * INTEGER.SECOND;
    prize += consumer.getLottoResult()[6] * INTEGER.FIRST;

    Console.print(LOTTO_RESULT_GUIDE.RATE_OF_RETURN, (prize / price) * 100.0);
  }
}

export default OutputView;
