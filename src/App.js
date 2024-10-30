import {Random, Console} from '@woowacourse/mission-utils'
import Lotto from "./Lotto.js";

class App {
  async run() {
    const totalMoeny = await Console.readLineAsync("구매할 금액을 입력해주세요 : ");

    const lottoCount = totalMoeny / 1000;

    //const lottoNumber = [...Random.pickUniqueNumbersInRange(1,45,6)];
    const lottoNumber = [];

    for(let i = 0; i < lottoCount; i++){
      lottoNumber.push(new Lotto(Random.pickUniqueNumbersInRange(1,45,6)));
    }

    lottoNumber.map((lotto)=>{
      Console.print(lotto.getNumber());
    })
    Console.print("");

    const winNumber = await Console.readLineAsync("당첨 번호를 입력해주세요 : ");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요 : ");

    Console.print("당첨 통계\n---");

    Console.print("총 수익률은 입니다.");

  }
}

export default App;
