import { Console } from "@woowacourse/mission-utils";

class LottoView {
  async getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input.split(",").map(Number);
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Number(input);
  }

  showLottoList(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
}

export default LottoView;
