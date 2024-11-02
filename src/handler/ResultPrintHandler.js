import { MissionUtils } from "@woowacourse/mission-utils";

export class ResultPrintHandler {
  message = `\n당첨 통계\n---\n`;
  bonusMessage = `, 보너스 볼 일치`;

  printResult(lottoResult) {
    this.message += this.#price(lottoResult);
    MissionUtils.Console.print(this.message)
  }

  #price(lottoResult) {
    let message = '';
    Object.values(lottoResult).forEach((result) => {
      const resultObj = result.getResult();
      const isBonus = (resultObj.match === 5 && resultObj.price === 30_000_000) ? this.bonusMessage : '';
      message += `${resultObj.match}개 일치${isBonus} (${resultObj.price.toLocaleString()}원) - ${resultObj.count}개\n`
    })
    return message;
  }
}