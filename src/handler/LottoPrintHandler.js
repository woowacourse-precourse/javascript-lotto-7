import { MissionUtils } from "@woowacourse/mission-utils";
import { viewMessages } from "../constant/message.js";

export class LottoPrintHandler {
  async printMyLotto(myLottoArr) {
    const content = `\n${myLottoArr.length}${viewMessages.count}`;
    await MissionUtils.Console.print(content);

    for (const lotto of myLottoArr) {
      await MissionUtils.Console.print(`[${lotto.getNumbers().sort((a, b) => a - b).join(', ')}]`)
    }
  }
}
