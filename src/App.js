import {Console} from "@woowacourse/mission-utils";

const informmessage = "구입금액을 입력해 주세요.\n";
class App {
  async run() {
    let budget = await Console.readLineAsync(informmessage);

  }
}

export default App;
