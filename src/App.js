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
      await allLotto.addInputLotto(lotto);
    }

    await allLotto.printAllLotto();


    const inputWinningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');


    if (!inputWinningNumbers.includes(',')) {
      console.log('[ERROR] 숫자를 쉼표 구분자로 구분해서 입력해야 합니다.');
    }

    if (!inputWinningNumbers.split(',').length === 6) {
      console.log('[ERROR] 당첨 번호는 6자리로 입력해야 합니다.');
    }

    if (inputWinningNumbers.split(',').forEach((val) => {
    })) {
      if (isNaN(val)) console.log('[ERROR] 숫자를 입력해야 합니다.');
      if (Number(val) < 1 || Number(val) > 45) console.log('[ERROR] 숫자는 1과 45 사이의 숫자만 입력해야 합니다.')
    }

    if (!new Set(inputWinningNumbers.split(',')).size === inputWinningNumbers.split(',').length) {
      console.log('[ERROR] 중복된 숫자가 존재해서는 안됩니다.')
    }

    const winningNumbersArray = inputWinningNumbers.split(',').map(Number);  // 당첨 번호 검증 필요


    const bonusNumber = Number(await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));


    await allLotto.setWinningLotto(winningNumbersArray, bonusNumber);

    await allLotto.printWinningResult();
  }
}

export default App;
