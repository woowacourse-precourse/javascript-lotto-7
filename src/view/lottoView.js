import { Console } from "@woowacourse/mission-utils";

class LottoView {
  printLottoList(lottoList) {
    Console.print(`\n${lottoList.length}개를 구매했습니다.`)
    for (let lotto of lottoList){
      Console.print(lotto);
    }
  }
}

export default LottoView;