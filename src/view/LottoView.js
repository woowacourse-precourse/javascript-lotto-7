import { Console } from "@woowacourse/mission-utils";

export default class LottoView {
  async getPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showPurchasedLottoCount(count) {
    return Console.print(`\n${count}개를 구매했습니다.`);
  }
}
