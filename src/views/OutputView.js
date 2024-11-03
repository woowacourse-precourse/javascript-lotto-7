import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static async printLottoCount(lottoCount) {
    return await Console.print(`${lottoCount}개를 구매했습니다. ` + "\n");
  }
}
