import { Console, Random } from "@woowacourse/mission-utils"
class App {
  async run() {
    const inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");

    const inputNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const winningNumbers = inputNumbers.split(",").filter(item => item !== "");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");

  }
}

export default App;
