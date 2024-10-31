import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const amount = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"))

    const possibleLottoCount = Number(amount/1000);
    Console.print(`\n${possibleLottoCount}개를 구매했습니다.`)

    const lottoArray = this.createLotto(possibleLottoCount);
    this.displayLotto(lottoArray);

    const inputWinningLotto = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningLotto = this.createWinningLotto(inputWinningLotto);
  }

  createLotto(count){
    const lottoArray = [];

    for(let i=0; i<count; i++){
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b)=> a-b)

      const lottoClass = new Lotto(lotto);

      lottoArray.push(lottoClass);
    }

    return lottoArray;
  }

  displayLotto(lottoArray){
    for(let i of lottoArray){
      Console.print(i.getLotto());
    }
  }

  createWinningLotto(lottoNumbers){
    return lottoNumbers.split(",").map(lotto => Number(lotto));
  }
}

export default App;
