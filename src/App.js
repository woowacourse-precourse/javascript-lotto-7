import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const amount = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"))

    const possibleLottoCount = Number(amount/1000);

    const lottoArray = this.createLottoNumber(possibleLottoCount);

    console.log(lottoArray);
  }

  createLottoNumber(count){
    const lottoArray = [];

    for(let i=0; i<count; i++){
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b)=> a-b)
      lottoArray.push(lotto);
    }

    return lottoArray;
  }
}

export default App;
