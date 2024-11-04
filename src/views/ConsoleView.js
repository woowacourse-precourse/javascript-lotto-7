import { Console } from "@woowacourse/mission-utils";

const ConsoleView = {
  askPurchaseAmount() {
    return new Promise((resolve) => {
      Console.readLineAsync("구입금액을 입력해 주세요.\n", resolve);
    });
  },

  askWinningNumbers() {
    return new Promise((resolve) => {
      Console.readLineAsync("당첨 번호를 입력해 주세요.\n", resolve);
    });
  },

  askBonusNumber() {
    return new Promise((resolve) => {
      Console.readLineAsync("보너스 번호를 입력해 주세요.\n", resolve);
    });
  },

  showLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  showResults(results) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+bonus"]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
  },

  showError(error) {
    Console.print(`[ERROR] ${error.message}`);
  },
};

export default ConsoleView;
