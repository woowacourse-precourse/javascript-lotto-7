import { Console } from "@woowacourse/mission-utils"
import printAllLotto from "./AllLotto.js";
class App {
  async run() {
    const inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    const lottoNum = inputPrice / 1000;
    Console.print(`${lottoNum}개를 구매했습니다.`)
    const lottoArray = printAllLotto(lottoNum);


    const inputNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const winningNumbers = inputNumbers.split(",").filter(item => item !== "");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");

  }
}

export default App;
