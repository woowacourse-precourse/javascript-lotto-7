import { Console } from "@woowacourse/mission-utils";

class OutputView {
  constructor() {}
  printLottoNumber(lottoNumbers) {
    const lottoCount = lottoNumbers.length;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let count = 0; count < lottoCount; count++) {
      Console.print(lottoNumbers[count]);
    }
    Console.print("\n");
  }
  printWinningCount(winningCount) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningCount[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningCount[1]}개`);
    Console.print(`5개 일치 (1,500,500원) - ${winningCount[2]}개`);
    Console.print(`5개 일치, 보너스볼 일치 - ${winningCount[4]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningCount[3]}개`);
  }
  printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}% 입니다.`);
  }
}

export default OutputView;
