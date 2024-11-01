import { Console } from "@woowacourse/mission-utils";

export default class LottoView {
  async getPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showPurchasedLottoCount(count) {
    return Console.print(`\n${count}개를 구매했습니다.`);
  }

  showPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async getWinningLottoNumbers() {
    return await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
  }

  async getWinningLottoBonusNumbers() {
    return await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
  }
}
