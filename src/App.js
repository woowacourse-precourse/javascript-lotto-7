import {Random, Console} from '@woowacourse/mission-utils'

class App {
  async run() {
    const totalMoeny = await Console.readLineAsync("구매할 금액을 입력해주세요 : ");

    const winNumber = await Console.readLineAsync("당첨번호를 입력해주세요 : ");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요 : ");

    Console.print("당첨 결과");

    Console.print("수익률");

  }
}

export default App;
