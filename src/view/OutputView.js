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
}

export default OutputView;
