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

  showLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  showLottoList(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  showResults(results) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[1]}개`);
  }

  showProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default LottoView;
