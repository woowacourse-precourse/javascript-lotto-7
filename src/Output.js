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
}

export default Output;