import { Console } from "@woowacourse/mission-utils";

class Output {
  static printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  static printStatics(results) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[1]}개`);
  }

  static printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default Output;