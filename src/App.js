import {Console} from "@woowacourse/mission-utils";
import LottoList from "./LottoList.js";

const informmessage = "구입금액을 입력해 주세요.\n";
let ll;
class App {

  async run() {
    let budget = await Console.readLineAsync(informmessage);
    ll = new LottoList(budget);
    ll.printbuyotto();
  }
}

export default App;
