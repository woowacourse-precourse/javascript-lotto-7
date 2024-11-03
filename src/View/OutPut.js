import { Console } from "@woowacourse/mission-utils";

const LottoWinningAmountString = {
  three: "5,000",
  four: "50,000",
  five: "1,500,000",
  fiveWithBounsBall: "30,000,000",
  six: "2,000,000,000",
};

class Output {
  static printWinningStatistics() {
    Console.log("당첨 통계");
    Console.log("---");

    //TODO: 반복
    // printWinningStatistic
  }

  static printWinningStatistic(matchNumber, lottoWinningAmountString, count) {
    // 당첨 내역을 출력하는 코드
    Console.log(
      `${matchNumber}개 일치 (${lottoWinningAmountString}) - ${count}개`
    );
  }

  static printProfitRate(profitRate) {
    // 총 수익률은 62.5%입니다.
    Console.log(`총 수익률은 ${profitRate}입니다.`);
  }
}

export default Output;
