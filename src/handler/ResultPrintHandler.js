import { MissionUtils } from "@woowacourse/mission-utils";

export class ResultPrintHandler {
  static RESULT_HEADER = "\n당첨 통계\n---\n";
  static BONUS_MESSAGE = ", 보너스 볼 일치";
  static REWARD_RATE_MESSAGE = "총 수익률은 ";

  message = ResultPrintHandler.RESULT_HEADER;

  printResult(lottoResult, rewardRate) {
    this.message += this.#price(lottoResult);
    this.message += `${ResultPrintHandler.REWARD_RATE_MESSAGE}${rewardRate}%입니다.`;
    MissionUtils.Console.print(this.message);
  }

  #price(lottoResult) {
    let message = '';
    Object.values(lottoResult).forEach((result) => {
      const resultObj = result.getResult();
      const isBonus = (resultObj.match === 5 && resultObj.price === 30_000_000) ? ResultPrintHandler.BONUS_MESSAGE : '';
      message += `${resultObj.match}개 일치${isBonus} (${resultObj.price.toLocaleString()}원) - ${resultObj.count}개\n`
    })
    return message;
  }
}
