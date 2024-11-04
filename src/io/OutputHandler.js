import { Console } from "@woowacourse/mission-utils";

// Output들을 관리하는 클래스
class OutputHandler {
  // 로또 갯수 출력
  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  // 랜덤 로또 번호 출력
  printLottoNumbers(lottoNumbers) {
    Console.print(lottoNumbers);
  }

  // 최종 당첨 결과 출력
  printResult(winningRanks) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningRanks[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningRanks[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningRanks[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRanks[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningRanks[1]}개`);
  }

  // 수익률 출력
  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputHandler;
