import { Console } from "@woowacourse/mission-utils";

class OutputView {
  constructor() { }

  printBlankLine() {
    Console.print("");
  }

  printError(error) {
    Console.print(error.message);
  }

  printTickets(numbers) {
    const PURCHASE_NUMBER = numbers.length;

    this.printBlankLine();

    Console.print(`${PURCHASE_NUMBER}개를 구매했습니다.`);
    numbers.forEach(number => {
      Console.print(`[${number.join(", ")}]`);
    });
  }

  printMatch(object) {
    this.printBlankLine();
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${object[0].count}개`);
    Console.print(`4개 일치 (50,000원) - ${object[1].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${object[2].count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${object[3].count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${object[4].count}개`);
  }

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

}

export default OutputView;