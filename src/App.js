import { Console } from "@woowacourse/mission-utils";

export async function inputAmount() {
  const amount = await Console.readLineAsync("구입금액을 입력해 주세요.");
  return amount;
}

class App {
  async run() {}
}

export default App;
