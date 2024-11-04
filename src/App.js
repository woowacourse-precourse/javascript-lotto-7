import getInput from './input/getInput.js';
import printString from './output/printString.js';
import { checkLottoPurchasePrice } from './input/validatorInput.js';
import Lotto from './Lotto/Lotto.js';
import lottoGenerator from './Lotto/lottoGenerator.js';



class App {
  async run() {
    const purchasePrice = Number(await getInput('구입금액을 입력해 주세요.\n'));
    checkLottoPurchasePrice(purchasePrice);
    const LottoPurchaseAmount = purchasePrice/1000;
    printString(`${LottoPurchaseAmount}개를 구매했습니다.\n`);

    const lottoList = lottoGenerator(LottoPurchaseAmount);
    lottoList.forEach(lotto => {
      lotto.print();
    })


    const lottoWinningNumbers = new Lotto(await getInput('\n당첨 번호를 입력해 주세요.\n'));
    const lottoBonusNumber = await getInput('\n보너스 번호를 입력해 주세요.\n')

  }
}

export default App;
