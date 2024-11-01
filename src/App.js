import { MissionUtils } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";
import AllLotto from "./AllLotto.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const INPUT_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = new PurchaseAmount(INPUT_AMOUNT);
    const totalLotto = purchaseAmount.getLottoCount();
    const allLotto = new AllLotto();

    for (let i = 0; i < totalLotto; i++) {
      const numbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      allLotto.addInputLotto(lotto);
    }

    allLotto.printAllLotto();


    const inputWinningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbersArray = inputWinningNumbers.split(',').map(Number);


    const bonusNumber = Number(await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));


    allLotto.setWinningLotto(winningNumbersArray, bonusNumber);

    allLotto.compareLottos();

    allLotto.printWinningResult();
  }
}

export default App;
