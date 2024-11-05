import {
  ERROR,
  RANKING,
  SEPARATOR,
  STATISTICS_MESSAGE,
} from "../constants/Constants.js";
import { RANKINGS } from "../constants/Constants.js";

export class MessageFormatter {
  static errorMessage(type) {
    return `${ERROR.TAG} ${ERROR[type]}`;
  }

  static thousandsSeparator(money) {
    const regex = new RegExp(
      `\\B(?=(\\d{${STATISTICS_MESSAGE.THOUSAND_UNIT}})+(?!\\d))`,
      "g"
    );
    return money.toString().replace(regex, SEPARATOR);
  }

  static statisticsMessage(totalRanking) {
    let statistics = [STATISTICS_MESSAGE.TITLE, STATISTICS_MESSAGE.LINE];

    for (let ranking = RANKING.LAST; ranking >= RANKING.FIRST; ranking--) {
      const prize = this.thousandsSeparator(RANKINGS[ranking].PRIZE);
      const total = totalRanking[ranking];

      statistics.push(STATISTICS_MESSAGE[ranking](prize, total));
    }

    return statistics;
  }
}
